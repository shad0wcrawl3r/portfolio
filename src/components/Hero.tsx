import { useEffect, useState } from 'react';

const ASCII_ROLE = String.raw`
              _             _       ____       _ _                    
    /\       | |           (_)     |  _ \     | | |                   
   /  \   ___| |____      ___ _ __ | |_) | ___| | |__   __ _ ___  ___ 
  / /\ \ / __| '_ \ \ /\ / / | '_ \|  _ < / _ \ | '_ \ / _\` / __|/ _ \
 / ____ \\__ \ | | \ V  V /| | | | | |_) |  __/ | |_) | (_| \__ \  __/
/_/    \_\___/_| |_|\_/\_/ |_|_| |_|____/ \___|_|_.__/ \__,_|___/\___| 
`.replace(/^\n/, '');
// the .replace is there to remve the first newline. if removed, render looks weird

const ROTATE_WORDS = [
  'secure, observable, scalable systems.',
  'detection pipelines that don\u2019t lie.',
  'infrastructure you can sleep through.',
  'tools for engineers who read logs.',
];

export function Hero() {
  const [typed, setTyped] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // 👇 define word OUTSIDE so JSX can see it
  const word = ROTATE_WORDS[wordIdx];
  const isDone = !deleting && typed === word;

  useEffect(() => {
    const word = ROTATE_WORDS[wordIdx];

    if (!deleting && typed === word) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }

    if (deleting && typed === '') {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % ROTATE_WORDS.length);
      return;
    }

    const t = setTimeout(() => {
      setTyped((prev) =>
        deleting
          ? word.slice(0, prev.length - 1)
          : word.slice(0, prev.length + 1),
      );
    }, deleting ? 24 : 46);

    return () => clearTimeout(t);
  }, [typed, deleting, wordIdx]);

  return (
    <section className="kit-hero">
      <div className="grid-bg" />
      <div className="hero-inner">
        <div className="hero-label">
          [ 00 / INDEX ] — ashwin.belbase · portfolio.2026
        </div>

        <div className="hero-terminal hero-terminal-wide">
          <div className="term-head">
            <span className="tl">● ● ●</span>
            <span className="tl-title">~/ashwin — zsh</span>
          </div>

          <div className="term-body">
            <div><span className="p">$ </span>cat /etc/whoami</div>

            {/* <div><span className="p">$</span> figlet -f standard "ASHWIN"</div> */}
            <pre className="ascii-banner">{ASCII_ROLE}</pre>

            <div className="out">
              ashwin.belbase — cybersecurity engineer / SIEM · DevOps · R&amp;D Lead
            </div>
            <div><span className="p">$ </span>glow tagline.md</div>

            <div className="out tagline-line">
              <span>I build&nbsp;</span>

              {!isDone ? (
                <code className="typed-code">
                  <span className="typed-text">{typed}</span>
                  <span className="cur" />
                </code>
              ) : (
                <>
                  <code className="typed-code">
                    <span className="typed-text">{typed}</span>
                  </code>
                  <span className="cur outside" />
                </>
              )}
            </div>
          </div>
        </div>

        <div className="hero-meta">
          <span className="sep">/</span>
          <span>kathmandu · remote</span>
          <span className="sep">/</span>
          <span>5+ years</span>
        </div>
      </div>
    </section>
  );
}

