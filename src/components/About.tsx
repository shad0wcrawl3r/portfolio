import { SectionHeader } from './SectionHeader';

export function About() {
  return (
    <section className="kit-about">
      <SectionHeader number={1} label="ABOUT" hint="// whoami" id="about" />
      <div className="about-grid">
        <div className="about-body">
          <p>
            Cybersecurity graduate with 5+ years of experience in SIEM engineering, DevOps, and R&D leadership. Focused on building secure, resilient infrastructure with strong observability.
          </p>
          <p>
            Hands-on with distributed systems, logging pipelines, CI/CD, and infrastructure-as-code—and I build weird stuff for fun.
          </p>
          {/* <p> */}
          {/*   Cybersecurity graduate with 5+ years of experience across SIEM engineering, DevOps, and R&amp;D leadership. Focused on secure infrastructure and platform engineering, building resilient systems with strong observability and security foundations. */}
          {/* </p> */}
          {/* <p> */}
          {/*   Experienced in distributed systems, logging pipelines, and automation, with hands-on work across CI/CD, infrastructure-as-code, and low-level system environments. */}
          {/* </p> */}
          {/* <p> */}
          {/*   Cybersecurity graduate with 5+ years of experience across SIEM engineering, DevOps, and R&amp;D leadership. */}
          {/*   Currently focused on secure infrastructure and platform engineering, with an emphasis on designing resilient, */}
          {/*   security-hardened systems and scalable detection-ready environments. */}
          {/* </p> */}
          {/* <p> */}
          {/*   Strong background in distributed systems, logging pipelines, and automation, with hands-on experience building */}
          {/*   secure-by-design infrastructure, improving observability, and strengthening detection and response workflows. */}
          {/*   Comfortable working across the stack—from CI/CD and infrastructure-as-code to system internals and kernel-level namespaces. */}
          {/* </p> */}
          {/* <p> */}
          {/*   Cybersecurity graduate with 5+ years across SIEM engineering, DevOps, */}
          {/*   and R&amp;D leadership. Focused on detection engineering, infrastructure */}
          {/*   security, and system-level experimentation. */}
          {/* </p> */}
          {/* <p> */}
          {/*   Strong background in distributed systems, logging pipelines, and */}
          {/*   automation. Comfortable moving between a playbook runtime and a */}
          {/*   kernel namespace in the same afternoon. */}
          {/* </p> */}
        </div>
        <div className="about-side">
          <div className="about-row"><span className="k">homebase</span><span className="v">kathmandu · nepal</span></div>
          <div className="about-row"><span className="k">status</span><span className="v accent">● open to oppurtunities</span></div>
          <div className="about-row"><span className="k">focus</span><span className="v">· infra · r&amp;d</span></div>
          <div className="about-row"><span className="k">pgp</span><span className="v">TBD — trust me, I’ll overengineer it</span></div>
          {/* <div className="about-row"><span className="k">pgp</span><span className="v">0xA1B2 · C3D4 · E5F6</span></div> */}
        </div>
      </div>
    </section>
  );
}
