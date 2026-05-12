import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const reviews = [
  {
    name: "Pravesh Kapoor",
    text: "If you're looking for a relaxed cup of coffee with great taste and a quiet atmosphere — perfect for discussing ideas about your startup or business — I would recommend this place. Try the coffee made by Harshit; he makes it perfectly.",
    location: "Local Guide",
    rating: 5,
  },
  {
    name: "Shruti Malhotra",
    text: "I visited this outlet with my friend and found it amazing. Such a great ambiance and friendly staff. We tried the mocha and chicken pizza — everything was so good.",
    location: "Local Guide",
    rating: 5,
  },
  {
    name: "Anjali Rawat",
    text: "We ordered the hazelnut latte — amazing taste and portion. Delhi's winter and Cafe Crew Brew's cosy ambience make a perfect combination. A must visit.",
    location: "Local Guide",
    rating: 5,
  },
  {
    name: "Nidhi Gupta",
    text: "A beautiful place with serene vibes and good music. Coffee is amazing and food is good as well. The cafe also has an interesting book collection and a couple of board games and cards to play.",
    location: "Verified Diner",
    rating: 5,
  },
  {
    name: "Arpita Khandelwal",
    text: "A great place if you want to have a nice quiet time. They have a great playlist giving soothing vibes. I had hazelnut cappuccino which was amazing.",
    location: "Verified Diner",
    rating: 5,
  },
  {
    name: "Anisha Rangra",
    text: "Amazing place to work and chill. The coffee smells like heaven and the best part is the staff — so cordial and polite. Specially Neeraj and Harshita, they always take care of your specifications.",
    location: "Verified Diner",
    rating: 5,
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(t);
  }, [inView]);

  const current = reviews[index];

  return (
    <section
      id="reviews"
      ref={ref}
      className="section-y reviews-section"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212, 165, 116, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container-x" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div className="section-header section-header-dark">
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
              <span className="eyebrow">Loved Locally</span>
            </div>
            <h2
              className="section-title"
              style={{ color: "var(--color-cream)" }}
            >
              Words from{" "}
              <span
                className="serif-italic"
                style={{ color: "var(--color-latte)" }}
              >
                our regulars.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="section-header-right reviews-rating"
          >
            <div className="reviews-rating-inner">
              <div>
                <p className="reviews-rating-num">4.8</p>
                <div
                  style={{ display: "flex", gap: "4px", marginTop: "8px" }}
                >
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#D4A574"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div
                style={{
                  width: "1px",
                  height: "56px",
                  background: "rgba(212, 165, 116, 0.3)",
                }}
              />
              <div>
                <p
                  style={{
                    color: "var(--color-cream)",
                    fontSize: "20px",
                    fontWeight: 500,
                  }}
                >
                  434+
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(212, 165, 116, 0.7)",
                    marginTop: "4px",
                  }}
                >
                  Google Reviews
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Featured review */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease, delay: 0.3 }}
          style={{
            maxWidth: "880px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            className="serif-italic"
            style={{
              color: "rgba(212, 165, 116, 0.3)",
              fontSize: "80px",
              lineHeight: 1,
              marginBottom: "16px",
            }}
          >
            "
          </div>

          <div className="review-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease }}
              >
                <blockquote
                  className="review-quote"
                  style={{ marginBottom: "32px" }}
                >
                  {current.text}
                </blockquote>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "9999px",
                      background: "var(--color-caramel)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-cream)",
                      fontWeight: 500,
                      flexShrink: 0,
                    }}
                  >
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      style={{
                        color: "var(--color-cream)",
                        fontSize: "15px",
                        fontWeight: 500,
                      }}
                    >
                      {current.name}
                    </p>
                    <p
                      style={{
                        color: "rgba(212, 165, 116, 0.7)",
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginTop: "2px",
                      }}
                    >
                      {current.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination */}
          <div className="review-pagination">
            <div style={{ display: "flex", gap: "6px" }}>
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  style={{
                    height: "4px",
                    width: i === index ? "32px" : "14px",
                    borderRadius: "9999px",
                    background:
                      i === index
                        ? "var(--color-latte)"
                        : "rgba(212, 165, 116, 0.25)",
                    transition: "all 0.3s ease",
                  }}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() =>
                  setIndex(
                    (p) => (p - 1 + reviews.length) % reviews.length
                  )
                }
                className="review-nav-btn"
                aria-label="Previous"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => setIndex((p) => (p + 1) % reviews.length)}
                className="review-nav-btn"
                aria-label="Next"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}