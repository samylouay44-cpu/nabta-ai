import Link from "next/link";
import SectionHeader from "./components/SectionHeader";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="badge">Egypt • Seedlings • Greenhouse Produce</span>
          <h1>
            NABTA supplies consistent seedlings and greenhouse produce — built for reliability and scale.
          </h1>
          <p className="lead">
            We help farms and buyers reduce variability by delivering healthy seedlings, clean grading standards, and dependable weekly supply.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
            <a className="btn primary" href="/contact">Request a Quote</a>
            <Link className="btn" href="/services">Explore Services</Link>
            <Link className="btn" href="/about">About NABTA</Link>
          </div>

          <div className="heroGrid">
            <div className="card">
              <div className="cardPad">
                <SectionHeader
                  title="What we deliver"
                  subtitle="A production-first approach: quality systems, consistent supply, and clear reporting."
                />
                <div className="grid3">
                  <div className="feature">
                    <h3>Seedling Nursery</h3>
                    <p>Strong roots, uniform growth, and clean trays — ready for transplanting success.</p>
                  </div>
                  <div className="feature">
                    <h3>Greenhouse Produce</h3>
                    <p>Stable weekly supply with grading standards that supermarkets can trust.</p>
                  </div>
                  <div className="feature">
                    <h3>Farm Support</h3>
                    <p>Simple SOPs, checklists, and monitoring so operations stay consistent.</p>
                  </div>
                </div>

                <ul className="list">
                  <li><span className="dot" />Crop planning & cycle scheduling (greenhouse & nursery)</li>
                  <li><span className="dot" />Quality standards: grading, packaging, and handling</li>
                  <li><span className="dot" />Delivery discipline: predictable timing and quantities</li>
                </ul>
              </div>
            </div>

            <aside className="card">
              <div className="cardPad">
                <p style={{ fontWeight: 900, fontSize: 16, margin: 0 }}>At-a-glance</p>
                <p style={{ color: "var(--muted)", marginTop: 6 }}>
                  Replace these numbers with your real NABTA KPIs anytime.
                </p>

                <div className="kpis" style={{ marginTop: 12 }}>
                  <div className="kpi">
                    <div className="v">300K+</div>
                    <div className="l">Seedlings / cycle capacity</div>
                  </div>
                  <div className="kpi">
                    <div className="v">9+</div>
                    <div className="l">Active greenhouses</div>
                  </div>
                  <div className="kpi">
                    <div className="v">Weekly</div>
                    <div className="l">Supermarket supply rhythm</div>
                  </div>
                </div>

                <div style={{ marginTop: 14 }}>
                  <p className="small" style={{ fontWeight: 800, color: "var(--fg)" }}>Buyers we serve</p>
                  <div className="pillRow">
                    <span className="pill">Supermarkets</span>
                    <span className="pill">Wholesalers</span>
                    <span className="pill">Export-ready partners</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            title="How NABTA works"
            subtitle="A simple, repeatable system that keeps outcomes consistent."
          />
          <div className="split">
            <div className="feature">
              <h3>1) Plan</h3>
              <p>We align crop cycles, volumes, and delivery windows — then lock the schedule.</p>
            </div>
            <div className="feature">
              <h3>2) Produce</h3>
              <p>Nursery & greenhouse SOPs reduce variability: watering, nutrition, hygiene, and scouting.</p>
            </div>
            <div className="feature">
              <h3>3) Grade & pack</h3>
              <p>Clear grading rules and packing discipline protect quality to the last mile.</p>
            </div>
            <div className="feature">
              <h3>4) Deliver & report</h3>
              <p>We deliver on time and track quantities so partners can forecast confidently.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="card">
            <div className="cardPad" style={{ display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
              <div>
                <p style={{ margin: 0, fontWeight: 900, fontSize: 18 }}>Ready to work with NABTA?</p>
                <p style={{ marginTop: 6, color: "var(--muted)" }}>
                  Tell us your crop, weekly volume, and delivery location — we’ll reply with a plan.
                </p>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                <a className="btn primary" href="/contact">Request a Quote</a>
                <a className="btn" href="/gallery">See Gallery</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
