import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

export default function Demo() {
  return (
    <div className="py-20 w-full place-content-center">
    <div
        aria-hidden="true"
        className={cn(
          "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
          "blur-[30px]"
        )}
      />

      <section className="relative mx-auto max-w-3xl">
        <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
          <span className="text-muted-foreground">Built with infrastructure from companies that turned complex systems into
            simple user experiences.</span>
          <br />
          <span className="font-semibold"></span>
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-border mask-[linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={logos} />

        <div className="mt-5 h-px bg-border mask-[linear-gradient(to_right,transparent,black,transparent)]" />
      </section>
    </div>
  );
}


const logos = [
  {
    src: "https://svgl.app/library/twilio.svg",
    alt: "Twilio Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/openclaw.svg",
    alt: "Openclaw Logo",
  },
  {
    src: "https://svgl.app/library/linear.svg",
    alt: "Linear Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/stripe_wordmark.svg",
    alt: "Stripe Logo",
  },
  {
    src: "https://svgl.app/library/aws_light.svg",
    alt: "AWS Logo",
  },
];

