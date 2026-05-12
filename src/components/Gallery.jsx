import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const items = [
  {
    title: "The Pour",
    caption: "Crafted, cup by cup",
    image: "/pour.png",
    spanClass: "span-7-2",
  },
  {
    title: "Ambience",
    caption: "Light streaming in",
    image: "/ambience.png",
    spanClass: "span-5",
  },
  {
    title: "Late Night",
    caption: "Open till 2 AM",
    image: "/night.png",
    spanClass: "span-5",
  },
  {
    title: "Wood Fired",
    caption: "Pizza night",
    image: "/pizza.png",
    spanClass: "span-4",
  },
  {
    title: "with Team",
    caption: "Lovely customers",
    image: "/books.png",
    spanClass: "span-4",
  },
  {
    title: "Sweet Endings",
    caption: "Pastries & brownies",
    image: "/sweet.png",
    spanClass: "span-4",
  },
];

function Tile({ item, i, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease, delay: i * 0.08 }}
      className={`gallery-tile ${item.spanClass}`}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="gallery-img"
      />
      <div className="gallery-overlay" />
      <div className="gallery-caption">
        <p className="gallery-caption-eyebrow">{item.caption}</p>
        <h3 className="gallery-caption-title">{item.title}</h3>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="gallery"
      ref={ref}
      className="section-y"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="container-x">
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
              <span className="eyebrow">Inside the Cafe</span>
            </div>
            <h2 className="section-title">
              Moments,{" "}
              <span
                className="serif-italic"
                style={{ color: "var(--color-caramel)" }}
              >
                made here.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="section-header-right"
          >
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--color-coffee)",
              }}
            >
              A glimpse into the cups, corners and quiet hours that make Cafe
              Crew Brew the place you'll keep coming back to.
            </p>
          </motion.div>
        </div>

        <div className="gallery-grid">
          {items.map((item, i) => (
            <Tile key={i} item={item} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}