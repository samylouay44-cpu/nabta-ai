import SectionHeader from "../components/SectionHeader";

const tiles = Array.from({ length: 9 }).map((_, i) => ({
  title: `Photo ${i + 1}`,
  caption: "Replace with real greenhouse/nursery photos."
}));

export default function Gallery() {
  return (
    <main className="section">
      <div className="container">
        <SectionHeader
          title="Gallery"
          subtitle="Add your greenhouse, nursery, packaging, and delivery photos here."
        />

        <div className="grid3" style={{ marginTop: 16 }}>
          {tiles.map((t) => (
            <div key={t.title} className="feature" style={{ minHeight: 140 }}>
              <h3>{t.title}</h3>
              <p>{t.caption}</p>
              <div style={{
                marginTop: 10,
                height: 72,
                borderRadius: 14,
                background: "linear-gradient(135deg, rgba(15,122,74,.14), rgba(26,154,97,.10))",
                border: "1px solid var(--border)"
              }} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
