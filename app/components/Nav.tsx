import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <Link href="/" className="logo" aria-label="NABTA Home">
            <span className="logoMark" aria-hidden="true" />
            <span>NABTA</span>
          </Link>

          <nav className="navLinks" aria-label="Primary">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
            <a className="btn primary" href="/contact">Request a Quote</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
