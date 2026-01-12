import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footerGrid">
          <div>
            <div className="logo" style={{ marginBottom: 10 }}>
              <span className="logoMark" aria-hidden="true" />
              <span>NABTA</span>
            </div>
            <p className="small">
              NABTA is a greenhouse produce & seedling nursery company in Egypt — built for reliability, consistency,
              and scale.
            </p>
            <div className="pillRow">
              <span className="pill">Seedlings</span>
              <span className="pill">Greenhouse Produce</span>
              <span className="pill">Farm Support</span>
              <span className="pill">Quality Systems</span>
            </div>
            <p className="small" style={{ marginTop: 14 }}>
              © {new Date().getFullYear()} NABTA. All rights reserved.
            </p>
          </div>

          <div>
            <p className="small" style={{ fontWeight: 800, color: "var(--fg)" }}>Quick links</p>
            <ul className="list" style={{ marginTop: 8 }}>
              <li><span className="dot" /><Link href="/about">About NABTA</Link></li>
              <li><span className="dot" /><Link href="/services">Services</Link></li>
              <li><span className="dot" /><Link href="/gallery">Gallery</Link></li>
              <li><span className="dot" /><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
