import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="container-x">
        <div className="hero-grid">
          {/* LEFT — Text */}
          <div className="hero-text">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  height: "1px",
                  width: "32px",
                  background: "var(--color-caramel)",
                }}
              />
              <span className="eyebrow">A Coffeehouse · NSP Delhi</span>
            </motion.div>

            <h1 className="hero-title">
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.2 }}
                style={{ display: "block" }}
              >
                Brewed with care,
              </motion.span>
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.32 }}
                style={{ display: "block" }}
              >
                <span
                  className="serif-italic"
                  style={{ color: "var(--color-caramel)" }}
                >
                  served
                </span>{" "}
                warm.
              </motion.span>
            </h1>

            {/* Mobile image — between headline & bottom row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
              className="hero-image-mobile"
            >
              <img src="/image1.png" alt="Cafe Crew Brew" />
            </motion.div>

            {/* Bottom row */}
            <div className="hero-bottom">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.5 }}
                className="hero-desc"
              >
                A neighbourhood coffeehouse in NSP Delhi where every cup tells a
                story. Specialty roasts, fresh plates, and a cosy corner that
                stays open till 2 AM.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.6 }}
                className="hero-ctas"
              >
                <a href="#menu" className="btn btn-dark">
                  Explore Menu
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#visit" className="btn btn-ghost">
                  Visit Us
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.7 }}
                className="hero-stats"
              >
                <div>
                  <p className="hero-stat-num">4.8</p>
                  <p className="hero-stat-label">Google Rating</p>
                </div>
                <div className="hero-stat-divider" />
                <div>
                  <p className="hero-stat-num">434+</p>
                  <p className="hero-stat-label">Reviews</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT — Desktop image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.4 }}
            className="hero-image-desktop"
          >
            <img src="/image1.png" alt="Cafe Crew Brew" />
            <div className="hero-image-overlay" />
            <div className="hero-image-caption">
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 500,
                }}
              >
                Est. 2020
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
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
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.9)",
                    fontWeight: 500,
                  }}
                >
                  Open
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}