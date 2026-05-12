const items = [
  "Hand-pulled espresso",
  "Open till 2 AM",
  "Fresh subs daily",
  "434+ five-star reviews",
  "Cozy workspace",
  "Late-night brews",
  "Wood-fired pizzas",
];

export default function Marquee() {
  return (
    <section
      style={{
        background: "var(--color-bean)",
        padding: "20px 0",
        overflow: "hidden",
        borderTop: "1px solid var(--color-espresso)",
        borderBottom: "1px solid var(--color-espresso)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div style={{ display: "flex", overflow: "hidden" }}>
        <div
          className="marquee"
          style={{
            display: "flex",
            flexShrink: 0,
            whiteSpace: "nowrap",
            alignItems: "center",
            gap: "0",
          }}
        >
          {[...items, ...items, ...items].map((item, i) => (
            <div
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "32px",
                paddingLeft: "24px",
                paddingRight: "24px",
              }}
            >
              <span
                className="serif-italic"
                style={{
                  color: "rgba(245, 239, 230, 0.92)",
                  fontSize: "20px",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </span>
              <span
                style={{
                  color: "var(--color-caramel)",
                  fontSize: "10px",
                }}
              >
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}