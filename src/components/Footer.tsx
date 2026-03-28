const FOOTER_SECTIONS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#product" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "API access", href: "#developers" },
      { label: "Integrations", href: "#integrations" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "#documentation" },
      { label: "API access", href: "#api" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#30363D] bg-black py-20">
      <div className="mx-auto max-w-360 px-6 md:px-12">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-semibold text-white">Catch</span>
            <p className="mt-4 text-sm text-[#8B949E]">
              Time, figured out.
            </p>
            <div className="mt-6 space-y-2 text-sm text-[#8B949E]">
              <a
                href="mailto:support@catchapp.ca"
                className="block hover:text-[#A3CB31]"
              >
                support@catchapp.ca
              </a>
            </div>
          </div>
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-medium text-white">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#8B949E] transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-[#30363D] pt-8 text-center text-sm text-[#8B949E]">
          © 2025 Catch. Building the infrastructure that time runs on.
        </div>
      </div>
    </footer>
  );
}
