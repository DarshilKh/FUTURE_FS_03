import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const categories = [
  { id: "signature", label: "Signature" },
  { id: "hot", label: "Hot Coffee" },
  { id: "cold", label: "Cold Drinks" },
  { id: "food", label: "Food & Bites" },
  { id: "sweets", label: "Desserts" },
  { id: "tea", label: "Tea" },
];

const items = {
  signature: [
    { name: "Souls Own Frappe", price: "265", desc: "Our signature dark, rich, indulgent cream cold coffee.", veg: true, badge: "House Favourite" },
    { name: "Hazelnut Cappuccino", price: "189", desc: "Espresso layered with hazelnut, steamed milk and velvety foam.", veg: true, badge: "Most Loved" },
    { name: "Belgium Cold Chocolate", price: "255", desc: "Decadent Belgian chocolate blended with cold milk and cream.", veg: true, badge: "Indulgent" },
    { name: "Cake Shake Frappe", price: "276", desc: "Brownie pieces blended with milk, ice cream and a finishing topping.", veg: true, badge: "Sweet Tooth" },
  ],
  hot: [
    { name: "Cappuccino", price: "189", desc: "A freshly pulled shot of espresso layered with steamed whole milk and thick rich foam.", veg: true },
    { name: "Cafe Latte", price: "199", desc: "One or two shots of espresso, steamed milk and a thin layer of frothed milk.", veg: true },
    { name: "Cafe Mocha", price: "199", desc: "Rich, indulgent espresso with steamed milk and a chocolate finish.", veg: true },
    { name: "Vanilla Latte", price: "199", desc: "Light coffee with the gentle warmth of French vanilla.", veg: true },
    { name: "Cinnamon Cappuccino", price: "189", desc: "Classic cappuccino topped with a sprinkle of cinnamon for warmth.", veg: true },
    { name: "Filter Coffee", price: "169", desc: "Classic South Indian style coffee, brewed slow.", veg: true },
    { name: "Espresso", price: "150", desc: "A single shot of pure, rich black coffee.", veg: true },
    { name: "Affogato", price: "159", desc: "Vanilla ice cream drowned in a shot of hot espresso.", veg: true },
    { name: "Flat White", price: "199", desc: "Microfoam poured over a double shot of espresso.", veg: true },
  ],
  cold: [
    { name: "Iced Latte (No Sugar)", price: "197", desc: "Refreshing chilled espresso, cold milk and ice — clean and balanced.", veg: true },
    { name: "Iced Americano", price: "197", desc: "Black coffee with ice on the rocks.", veg: true },
    { name: "Cold Brew with Milk", price: "197", desc: "A balanced, latte-style cold brew.", veg: true },
    { name: "Mango Frappe", price: "245", desc: "Cool blend of Alphonso mango and rich cream.", veg: true },
    { name: "Strawberry Frappe", price: "249", desc: "A creamy, sweet treat — perfect for a warm afternoon.", veg: true },
    { name: "Mocha Cookie Frappe", price: "249", desc: "Thick, blended drink with crunchy cookies and whipped cream.", veg: true },
    { name: "Crunchy Caramel Frappe", price: "255", desc: "Caramel frappe with caramelised sugar topping.", veg: true },
    { name: "Tropical Lemonade", price: "197", desc: "Bright, fizzy lemonade with a tropical twist.", veg: true },
    { name: "Passion Fruit Ice Tea", price: "197", desc: "Brewed tea with the chill of passion fruit.", veg: true },
  ],
  food: [
    { name: "Grilled Chicken Sub", price: "181", desc: "Tender grilled chicken, fresh vegetables and sauces on toasted multigrain.", veg: false },
    { name: "Tandoori Paneer Tikka Sub", price: "182", desc: "Paneer in tandoori mayo and chaat masala with crisp veg in multigrain bread.", veg: true },
    { name: "Spicy Chicken Avocado Wrap", price: "230", desc: "Juicy chicken with avocado, iceberg and herb spices in a soft tortilla.", veg: false },
    { name: "Cheese Margherita Pizza", price: "189", desc: "Focaccia base, tangy tomato sauce, mozzarella and fresh basil. (8 inches)", veg: true },
    { name: "Chicken Pizza", price: "269", desc: "Seasoned chicken, mozzarella and pesto base with herbs. (8 inches)", veg: false },
    { name: "Peppy Paneer Pizza", price: "245", desc: "Spiced paneer, fresh veggies and melted cheese on a crispy crust. (8 inches)", veg: true },
    { name: "Crispy Veg Burger", price: "139", desc: "Crispy veggie patty loaded with extra greens.", veg: true },
    { name: "Couch Potato Sandwich", price: "175", desc: "Crunchy aloo bonda patty, onion rings and creamy mayo in panini.", veg: true },
    { name: "Green Falafel Sub", price: "175", desc: "Herb-infused green falafel with fresh veg and creamy sauces.", veg: true },
  ],
  sweets: [
    { name: "Java Choco Chip Pastry", price: "185", desc: "Rich chocolate pastry with a creamy, chocolaty twist.", veg: true },
    { name: "Rich Chocolate Pastry", price: "168", desc: "Decadent slice for true chocolate lovers.", veg: true },
    { name: "Nutty Butty Brownie", price: "131", desc: "A classic fudgy brownie — simple, perfect.", veg: true },
    { name: "Double Chocolate Brownie", price: "131", desc: "Indulgent brownie loaded with chocolate chunks.", veg: true },
    { name: "Blueberry Muffin", price: "120", desc: "Soft, moist muffin filled with juicy blueberries.", veg: true },
    { name: "Caramel Shell Donut", price: "105", desc: "Soft, fluffy donut with a caramel finish.", veg: true },
  ],
  tea: [
    { name: "Masala Chai", price: "120", desc: "The perfect cup of thick, milky tea — a warm pause.", veg: true },
    { name: "Jasmine Green Tea", price: "120", desc: "Delicate jasmine buds from the hills of Darjeeling.", veg: true },
    { name: "Darjeeling Tea", price: "120", desc: "Mellow, light-liquoring organic tea, full of antioxidants.", veg: true },
    { name: "Chamomile Wellness Tea", price: "140", desc: "Soothing chamomile — a moment of calm.", veg: true },
    { name: "Herbal Amla Tea", price: "120", desc: "An immune-boosting detox brew with Amla.", veg: true },
    { name: "Assam Tea", price: "120", desc: "Bold, malty black tea from the Assam plains.", veg: true },
  ],
};

function MenuRow({ item, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease, delay: Math.min(index * 0.04, 0.3) }}
      className="menu-row"
    >
      <div style={{ paddingTop: "6px" }}>
        <span className={item.veg ? "veg-mark" : "nonveg-mark"} />
      </div>

      <div>
        <div className="menu-row-title">
          <h3 className="menu-item-name">{item.name}</h3>
          {item.badge && <span className="menu-item-badge">{item.badge}</span>}
        </div>
        <p className="menu-item-desc">{item.desc}</p>
      </div>

      <div style={{ paddingTop: "2px" }}>
        <span className="menu-item-price">₹{item.price}</span>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [active, setActive] = useState("signature");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const list = items[active] || [];

  return (
    <section
      id="menu"
      ref={ref}
      className="section-y"
      style={{ background: "var(--color-beige)" }}
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
              <span className="eyebrow">Our Menu</span>
            </div>
            <h2 className="section-title">
              Crafted to{" "}
              <span
                className="serif-italic"
                style={{ color: "var(--color-caramel)" }}
              >
                savour.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="section-header-right"
          >
            From our signature Souls Own Frappe to a perfectly pulled
            espresso — every item on our menu is built to be slowed down with.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="menu-tabs"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`menu-tab ${active === cat.id ? "active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Items */}
        <div style={{ borderBottom: "1px solid rgba(217, 201, 177, 0.5)" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.35, ease }}
            >
              {list.map((item, i) => (
                <MenuRow key={item.name} item={item} index={i} inView={inView} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="menu-footer"
        >
          <p style={{ color: "var(--color-mocha)", fontSize: "14px" }}>
            Average for two ·{" "}
            <span style={{ color: "var(--color-bean)", fontWeight: 500 }}>
              ₹400 – ₹600
            </span>{" "}
            · All prices inclusive of taxes
          </p>
          <a
            href="https://www.zomato.com/ncr/cafe-crew-brew-3-netaji-subhash-place-new-delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-footer-link"
          >
            Order on Zomato →
          </a>
        </motion.div>
      </div>
    </section>
  );
}