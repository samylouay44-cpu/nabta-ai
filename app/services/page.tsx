import SectionHeader from "../components/SectionHeader";

const services = [
  {
    title: "Seedling Nursery Supply",
    desc: "Uniform seedlings with strong root systems, clean trays, and transplant-ready hardening."
  },
  {
    title: "Greenhouse Produce Supply",
    desc: "Consistent weekly delivery and grading standards for supermarkets and wholesalers."
  },
  {
    title: "Crop Cycle Planning",
    desc: "Cycle calendars, expected yields, and volume planning to reduce surprises."
  },
  {
    title: "Quality & SOP Systems",
    desc: "Simple SOPs for hygiene, scouting, grading, packing, and post-harvest handling."
  },
  {
    title: "Packaging & Labels",
    desc: "Buyer-ready packaging formats and labeling discipline for repeatable shelf quality."
  },
  {
    title: "Operations Reporting",
    desc: "Basic tracking of volumes, deliveries, and rejections to tighten feedback loops."
  }
];

export default function Services() {
  return (
    <main className="section">
      <div className="container">
        <SectionHeader
          title="Services"
          subtitle="Pick what you need — seedlings, produce supply, or operational support systems."
        />

        <div className="grid3" style={{ marginTop: 16 }}>
          {services.map((s) => (
            <div key={s.title} className="feature">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <div className="cardPad">
            <p style={{ margin: 0, fontWeight: 900 }}>Typical onboarding</p>
            <ul className="list">
              <li><span className="dot" />Share crop, target volumes, and delivery location</li>
              <li><span className="dot" />Confirm specs: grading, packing format, delivery rhythm</li>
              <li><span className="dot" />Start supply cycle and monitor quality feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
