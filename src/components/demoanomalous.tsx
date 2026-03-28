"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type AnomalousMatterHeroProps = {
  title?: string;
  subtitle?: string;
  description?: string;
};

const vertexShader = `
uniform float time;
varying vec3 vNormal;
varying vec3 vPosition;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(
    permute(
      permute(i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0)
    )
    + i.x + vec4(0.0, i1.x, i2.x, 1.0)
  );

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(
    dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)
  ));

  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(
    dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)
  ), 0.0);

  m = m * m;
  return 42.0 * dot(m * m, vec4(
    dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)
  ));
}

void main() {
  vNormal = normalize(normalMatrix * normal);
  vPosition = position;

  float displacement = snoise(position * 1.8 + vec3(0.0, 0.0, time * 0.45)) * 0.12;
  vec3 newPosition = position + normal * displacement;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`;

const fragmentShader = `
uniform vec3 color;
uniform vec3 pointLightPosition;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec3 normal = normalize(vNormal);
  vec3 lightDir = normalize(pointLightPosition - vPosition);

  float diffuse = max(dot(normal, lightDir), 0.0);
  float fresnel = 1.0 - max(dot(normal, vec3(0.0, 0.0, 1.0)), 0.0);
  fresnel = pow(fresnel, 2.0);

  vec3 finalColor = color * (0.25 + diffuse * 0.85) + color * fresnel * 0.35;
  gl_FragColor = vec4(finalColor, 1.0);
}
`;

export function GenerativeArtScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let frameId = 0;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000);
    camera.position.set(0, 0, 3);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "default",
      });
    } catch {
      setWebglFailed(true);
      return;
    }

    const gl = renderer.getContext();
    if (!gl) {
      renderer.dispose();
      setWebglFailed(true);
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.2, 6);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pointLightPosition: { value: new THREE.Vector3(0, 0, 5) },
        color: { value: new THREE.Color("#ffffff") },
      },
      vertexShader,
      fragmentShader,
      wireframe: true,
      transparent: true,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    scene.add(mesh);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);

    const resize = () => {
      const width = Math.max(mount.clientWidth, 1);
      const height = Math.max(mount.clientHeight, 1);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const handleContextLost = (event: Event) => {
      event.preventDefault();
      setWebglFailed(true);
    };

    const animate = (t: number) => {
      if (disposed) return;

      material.uniforms.time.value = t * 0.00025;

      mesh.rotation.y += 0.00035;
      mesh.rotation.x += 0.0001;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    frameId = window.requestAnimationFrame(animate);

    window.addEventListener("resize", resize);
    renderer.domElement.addEventListener("webglcontextlost", handleContextLost, false);

    return () => {
      disposed = true;

      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      renderer.domElement.removeEventListener("webglcontextlost", handleContextLost);

      scene.remove(mesh);
      scene.remove(pointLight);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (webglFailed) {
    return (
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_28%)]" />
    );
  }

  return <div ref={mountRef} className="absolute inset-0 z-0 h-full w-full" aria-hidden="true" />;
}

export default function AnomalousMatterHero({
  title = "Observation Log: Anomaly 7",
  subtitle = "Matter in a state of constant, beautiful flux.",
  description = "A new form of digital existence has been observed. It responds to stimuli, changes form, and exudes an unknown energy. Further study is required.",
}: AnomalousMatterHeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <GenerativeArtScene />

      <div className="absolute inset-0 z-10 bg-linear-to-t from-black via-black/70 to-transparent" />

      <div className="relative z-20 flex h-full flex-col items-center justify-end pb-20 text-center md:pb-32">
        <div className="max-w-3xl px-4">
          <h1 className="text-sm font-mono uppercase tracking-widest text-white/70">
            {title}
          </h1>
          <p className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            {subtitle}
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}