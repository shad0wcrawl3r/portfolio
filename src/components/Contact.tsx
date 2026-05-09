import { SectionHeader } from './SectionHeader';

export function Contact() {

  return (
    <section className="kit-contact">
      <SectionHeader number={7} label="CONTACT" hint="// ping" id="contact" />
      <div className="contact-grid">
        <div className="contact-term">
          <div className="term-head">
            <span className="tl">● ● ●</span>
            <span className="tl-title">~/contact — mail.sh</span>
          </div>
          <div className="term-body">
            <div><span className="p">$</span> cat contacts.txt</div>
            <div className="out contact-row">
              <span className="gl">→</span>
              <a href="https://github.com/shad0wcrawl3r" className="accent">github.com/shad0wcrawl3r</a>
            </div>
            <div className="out contact-row">
              <span className="gl">→</span>
              <a href="https://linkedin.com/in/ashwinbelbase" className="accent">linkedin.com/in/ashwinbelbase</a>
            </div>
            <div className="out contact-row">
              <span className="gl">→</span>
              <a href="mailto:ashwin@shadowcrawler.dev" className="accent">ashwin@shadowcrawler.dev</a>
            </div>
            <div><span className="p">$</span> gpg --import pubkey.asc</div>
            <div className="out dim">gpg: key 0xA1B2C3D4E5F6: public key imported</div>
            <div><span className="p">$</span> <span className="cur" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="kit-footer">
      <span>~/ashwin.belbase · 2026</span>
      <span className="sep">/</span>
      <span>built with html, css, and reasonable opinions</span>
      <span className="sep">/</span>
      <span>Disclosure: Designed by Claude Design</span>
      <span className="sep">/</span>
      <span className="accent">● online</span>
    </footer>
  );
}
