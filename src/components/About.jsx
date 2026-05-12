import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const features = [
  {
    num: "01",
    title: "Sourced & Roasted",
    desc: "Beans hand-picked and roasted to bring out the cleanest, fullest flavour profile in every cup.",
  },
  {
    num: "02",
    title: "Crafted with Care",
    desc: "From latte art to plating — every detail is finished by people who love what they do.",
  },
  {
    num: "03",
    title: "A Place to Linger",
    desc: "Soft music, warm lighting, board games, books — and a kitchen that stays open till 2 AM.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-y"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="container-x">
        {/* Header */}
        <div className="about-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="about-header-left"
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
              <span className="eyebrow">Our Story</span>
            </div>
            <h2 className="about-title">
              More than coffee —{" "}
              <span
                className="serif-italic"
                style={{ color: "var(--color-caramel)" }}
              >
                a feeling.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="about-header-right"
          >
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--color-coffee)",
              }}
            >
              Tucked inside PP Tower in NSP, Cafe Crew Brew has been the
              neighbourhood's quiet escape since the day it opened. We brew
              honest coffee, cook fresh, and treat every guest like a regular —
              because most of them are.
            </p>
          </motion.div>
        </div>

        {/* Visual + features */}
        <div className="about-content">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="about-visual"
          >
            <div className="about-image-wrap">
              <img
                src="/coffee-beans.png"
                alt="Hand-roasted coffee beans"
                className="about-image"
              />
              <div className="about-image-overlay" />
              <div className="about-image-caption">
                <div>
                  <p
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--color-latte)",
                      marginBottom: "4px",
                    }}
                  >
                    Brewed Since
                  </p>
                  <p
                    className="display"
                    style={{
                      fontSize: "26px",
                      color: "var(--color-cream)",
                      fontWeight: 500,
                    }}
                  >
                    2020
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--color-latte)",
                      marginBottom: "4px",
                    }}
                  >
                    Located
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--color-cream)",
                      fontWeight: 500,
                    }}
                  >
                    PP Tower, NSP
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <div className="about-features">
            {features.map((f, i) => (
              <motion.div
                key={f.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.3 + i * 0.12 }}
                className="feature-row"
              >
                <span className="feature-num">{f.num}</span>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}