import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (href) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "rgba(245, 239, 230, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(217, 201, 177, 0.4)"
            : "1px solid transparent",
          transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <div
          className="container-x"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "80px",
          }}
        >
          {/* Logo */}
{/* Logo */}
<button
  onClick={() => goTo("#home")}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: 0,
  }}
>
  <div
    style={{
      width: "52px",
      height: "52px",
      borderRadius: "12px",
      background: "transparent",
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
  <div style={{ textAlign: "left" }}>
    <p
      className="display"
      style={{
        fontSize: "17px",
        fontWeight: 600,
        color: "var(--color-bean)",
        lineHeight: 1,
        margin: 0,
      }}
    >
      Cafe Crew Brew
    </p>
    <p
      style={{
        fontSize: "10px",
        letterSpacing: "0.2em",
        color: "var(--color-caramel)",
        textTransform: "uppercase",
        marginTop: "4px",
        fontFamily: "var(--font-sans)",
      }}
    >
      Est. NSP Delhi
    </p>
  </div>
</button>

          {/* Desktop nav — INLINE STYLES to guarantee spacing */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "4px",
            }}
            className="nav-desktop"
          >
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => goTo(link.href)}
                style={{
                  padding: "8px 16px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--color-bean)",
                  opacity: 0.8,
                  transition: "opacity 0.2s ease",
                  fontFamily: "var(--font-sans)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile burger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="tel:+919891045891"
              className="btn btn-dark nav-desktop-cta"
              style={{
                display: "none",
                fontSize: "13px",
                padding: "10px 20px",
              }}
            >
              <span
                className="soft-pulse"
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "9999px",
                  background: "#34d399",
                }}
              />
              Reserve
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="nav-mobile-burger"
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                borderRadius: "9999px",
              }}
              aria-label="Menu"
            >
              <motion.span
                style={{
                  display: "block",
                  width: "20px",
                  height: "2px",
                  background: "var(--color-bean)",
                  borderRadius: "9999px",
                }}
                animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                style={{
                  display: "block",
                  width: "20px",
                  height: "2px",
                  background: "var(--color-bean)",
                  borderRadius: "9999px",
                }}
                animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="nav-mobile-overlay"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "var(--color-cream)",
            }}
          >
            <div
              className="container-x"
              style={{
                paddingTop: "100px",
                paddingBottom: "48px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {links.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 + 0.1, duration: 0.4 }}
                    onClick={() => goTo(link.href)}
                    className="display"
                    style={{
                      textAlign: "left",
                      fontSize: "40px",
                      fontWeight: 500,
                      color: "var(--color-bean)",
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(217, 201, 177, 0.4)",
                    }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <a href="tel:+919891045891" className="btn btn-dark" style={{ width: "100%" }}>
                  <span
                    className="soft-pulse"
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "9999px",
                      background: "#34d399",
                    }}
                  />
                  Reserve a Table
                </a>
                <a
                  href="https://wa.me/919891045891"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light"
                  style={{ width: "100%" }}
                >
                  WhatsApp Us
                </a>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "13px",
                    color: "var(--color-mocha)",
                    paddingTop: "16px",
                  }}
                >
                  <p>PP Tower, Netaji Subhash Place</p>
                  <p>Open daily · Closes 2 AM</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}