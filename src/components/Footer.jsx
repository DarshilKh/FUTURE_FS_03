import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const linkSections = [
  {
    title: "Cafe",
    items: [
      { label: "About", href: "#about" },
      { label: "Menu", href: "#menu" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reviews", href: "#reviews" },
    ],
  },
  {
    title: "Visit",
    items: [
      { label: "Reservations", href: "#visit" },
      {
        label: "Directions",
        href: "https://maps.google.com/?q=Cafe+Crew+Brew+NSP+Delhi",
        external: true,
      },
      { label: "Hours", href: "#visit" },
      { label: "Order Online", href: "https://www.zomato.com/ncr/cafe-crew-brew-3-netaji-subhash-place-new-delhi", external: true },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Instagram", href: "https://www.instagram.com/accounts/login/?next=%2Fcafecrewbrew%2F&source=omni_redirect", external: true },
      { label: "Zomato", href: "https://www.zomato.com/ncr/cafe-crew-brew-3-netaji-subhash-place-new-delhi", external: true },
      {
        label: "Google",
        href: "https://maps.google.com/?q=Cafe+Crew+Brew+NSP+Delhi",
        external: true,
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/919891045891",
        external: true,
      },
    ],
  },
];

const handleClick = (e, href, external) => {
  if (external) return;
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-ink)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="container-x"
        style={{ paddingTop: "80px", paddingBottom: "40px" }}
      >
        {/* Top section: Logo + brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          style={{ marginBottom: "64px" }}
        >
          {/* Logo + eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "14px",
                background: "var(--color-cream-soft)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <img
                src="/logo.png"
                alt="Cafe Crew Brew"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <p className="eyebrow" style={{ marginBottom: 0 }}>
              A coffeehouse · NSP Delhi
            </p>
          </div>

          {/* Massive brand name */}
          <h2
            className="display"
            style={{
              fontSize: "clamp(56px, 12vw, 140px)",
              color: "var(--color-cream)",
              fontWeight: 500,
              lineHeight: 0.9,
            }}
          >
            Cafe Crew{" "}
            <span
              className="serif-italic"
              style={{ color: "var(--color-latte)" }}
            >
              Brew.
            </span>
          </h2>
        </motion.div>

        {/* Links grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Tagline column */}
          <div>
            <p
              style={{
                color: "rgba(212, 165, 116, 0.7)",
                fontSize: "13px",
                lineHeight: 1.6,
                maxWidth: "280px",
              }}
            >
              Brewing warmth, one cup at a time.
              <br />
              We're open till the night thins out.
            </p>
            <a
              href="tel:+919891045891"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "20px",
                color: "var(--color-cream)",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationColor: "var(--color-caramel)",
                textDecorationThickness: "1px",
              }}
            >
              098910 45891 →
            </a>
          </div>

          {/* Link columns */}
          {linkSections.map((section) => (
            <div key={section.title}>
              <p className="eyebrow" style={{ marginBottom: "16px" }}>
                {section.title}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: 0,
                  margin: 0,
                }}
              >
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href, item.external)}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="footer-link"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div
          style={{
            paddingTop: "32px",
            borderTop: "1px solid rgba(245, 239, 230, 0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
          className="footer-bottom"
        >
          <p style={{ color: "rgba(212, 165, 116, 0.5)", fontSize: "12px" }}>
            © 2025 Cafe Crew Brew. PP Tower, NSP, Shakurpur, Delhi 110034.
          </p>
          <div
            style={{ display: "flex", alignItems: "center", gap: "24px" }}
          >
            <a
              href="#"
              style={{
                color: "rgba(212, 165, 116, 0.5)",
                fontSize: "12px",
              }}
            >
              Privacy
            </a>
            <a
              href="#"
              style={{
                color: "rgba(212, 165, 116, 0.5)",
                fontSize: "12px",
              }}
            >
              Terms
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{
                color: "rgba(212, 165, 116, 0.5)",
                fontSize: "12px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Top
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 19V5M5 12l7-7 7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}