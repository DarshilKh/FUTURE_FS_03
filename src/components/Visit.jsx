import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const info = [
  {
    label: "Address",
    value: "PP Tower, Netaji Subhash Place,\nShakurpur, Delhi 110034",
    action: {
      text: "Get Directions",
      href: "https://maps.google.com/?q=Cafe+Crew+Brew+NSP+Delhi",
    },
  },
  {
    label: "Hours",
    value: "Open every day\nClosing time · 2:00 AM",
    badge: "Open Now",
  },
  {
    label: "Reservations",
    value: "+91 98910 45891",
    action: { text: "Call to Reserve", href: "tel:+919891045891" },
  },
  {
    label: "WhatsApp",
    value: "+91 98910 45891",
    action: { text: "Message Us", href: "https://wa.me/919891045891" },
  },
];

export default function Visit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="visit"
      ref={ref}
      className="section-y"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="container-x">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="section-header-left"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  height: "1px",
                  width: "32px",
                  background: "var(--color-caramel)",
                }}
              />
              <span className="eyebrow">Come Visit</span>
            </div>
            <h2 className="section-title">
              We've saved you{" "}
              <span
                className="serif-italic"
                style={{ color: "var(--color-caramel)" }}
              >
                a seat.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="section-header-right"
          >
            Reserve a table or just walk in — we're around till the small hours.
            Our regulars know there's always a corner waiting.
          </motion.p>
        </div>

        <div className="visit-grid">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="visit-left"
          >
            <div className="visit-info-grid">
              {info.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease, delay: 0.3 + i * 0.06 }}
                  className="card-warm"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--color-caramel)",
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </p>
                    {item.badge && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "2px 8px",
                          borderRadius: "9999px",
                          background: "#d1fae5",
                          color: "#047857",
                          fontSize: "10px",
                          fontWeight: 500,
                        }}
                      >
                        <span
                          className="soft-pulse"
                          style={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "9999px",
                            background: "#059669",
                          }}
                        />
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p
                    className="display"
                    style={{
                      fontSize: "16px",
                      color: "var(--color-bean)",
                      fontWeight: 500,
                      lineHeight: 1.4,
                      whiteSpace: "pre-line",
                      marginBottom: "16px",
                      flex: 1,
                    }}
                  >
                    {item.value}
                  </p>
                  {item.action && (
                    <a
                      href={item.action.href}
                      target={
                        item.action.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "13px",
                        color: "var(--color-bean)",
                        fontWeight: 500,
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                        textDecorationColor: "var(--color-caramel)",
                        textDecorationThickness: "1px",
                        alignSelf: "flex-start",
                      }}
                    >
                      {item.action.text} →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.6 }}
              className="map-container"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7374739649097!2d77.14874857544455!3d28.69636347562768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d034a6e1fecc3%3A0xe1e28e6dba461a8e!2sCafe%20Crew%20Brew!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
                style={{ filter: "saturate(0.85)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cafe Crew Brew Location"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}