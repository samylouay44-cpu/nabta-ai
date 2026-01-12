import SectionHeader from "../components/SectionHeader";

export default function About() {
  return (
    <main className="section">
      <div className="container">
        <SectionHeader
          title="About NABTA"
          subtitle="A modern nursery and greenhouse operation built to raise consistency across the supply chain."
        />

        <div className="split">
          <div className="feature">
            <h3>Our mission</h3>
            <p>
              Deliver healthy seedlings and reliable produce with repeatable standards — so farms and buyers can plan with confidence.
            </p>
          </div>
          <div className="feature">
            <h3>Our principles</h3>
            <p>
              Discipline beats chaos: cycle planning, hygiene, scouting, grading rules, and accurate records.
            </p>
          </div>
          <div className="feature">
            <h3>Where we operate</h3>
            <p>
              Egypt — serving local markets and building toward export-ready systems.
            </p>
          </div>
          <div className="feature">
            <h3>What we’re building</h3>
            <p>
              A scalable platform: nursery capacity, greenhouse operations, cold chain readiness, and reporting.
            </p>
          </div>
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <div className="cardPad">
            <p style={{ fontWeight: 900, margin: 0 }}>Quick story</p>
            <p style={{ color: "var(--muted)", marginTop: 8 }}>
              NABTA is focused on operational excellence — strong seedlings, consistent supply, and clean standards. Replace this section with your full brand story anytime.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
