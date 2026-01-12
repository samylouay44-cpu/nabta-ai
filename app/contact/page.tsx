import SectionHeader from "../components/SectionHeader";

export default function Contact() {
  return (
    <main className="section">
      <div className="container">
        <SectionHeader
          title="Contact"
          subtitle="Send your crop + weekly volume + delivery location. We’ll respond with a plan."
        />

        <div className="split">
          <div className="card">
            <div className="cardPad">
              <p style={{ margin: 0, fontWeight: 900 }}>Request a quote</p>
              <p style={{ marginTop: 6, color: "var(--muted)" }}>
                This form uses a mailto link by default. If you want, I can wire it to Netlify Forms or an API route.
              </p>

              <form
                className="form"
                action="mailto:your-email@example.com"
                method="post"
                encType="text/plain"
              >
                <input name="Name" placeholder="Your name" />
                <input name="Company" placeholder="Company / Farm (optional)" />
                <input name="Phone" placeholder="Phone / WhatsApp" />
                <input name="Email" placeholder="Email" />
                <input name="Crop" placeholder="Crop (e.g., cucumber, tomato, watermelon seedlings)" />
                <input name="Volume" placeholder="Weekly volume (kg) or seedlings quantity" />
                <textarea name="Details" placeholder="Delivery location + packaging specs + any requirements" />
                <button className="btn primary" type="submit">Send</button>
              </form>
            </div>
          </div>

          <div className="card">
            <div className="cardPad">
              <p style={{ margin: 0, fontWeight: 900 }}>Direct channels</p>
              <ul className="list">
                <li><span className="dot" />Email: your-email@example.com</li>
                <li><span className="dot" />WhatsApp: +20 (add number)</li>
                <li><span className="dot" />Location: Egypt</li>
              </ul>

              <div style={{ marginTop: 14 }}>
                <p style={{ margin: 0, fontWeight: 900 }}>What to include</p>
                <ul className="list">
                  <li><span className="dot" />Crop + variety</li>
                  <li><span className="dot" />Weekly quantity</li>
                  <li><span className="dot" />Delivery schedule</li>
                  <li><span className="dot" />Packaging & grading specs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
