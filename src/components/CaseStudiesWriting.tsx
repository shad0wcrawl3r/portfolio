import { SectionHeader } from './SectionHeader';

type Study = {
  num: string;
  title: string;
  meta: string;
  url: string;
};

const studies: Study[] = [
  // { num: '01', title: 'SIEM pipeline design and scaling', meta: 'Kafka · ClickHouse · ~200k EPS' },
  // { num: '02', title: 'Kubernetes-based security architecture', meta: 'Wazuh · Helm · multi-tenant' },
  // { num: '03', title: 'SOAR automation workflows', meta: 'soar-bun-v3 · playbook runtime' },
];

export function CaseStudies() {
  return (
    <section className="kit-cases">
      <SectionHeader number={5} label="CASE STUDIES" hint="// long-form" id="case-studies" />

      <ul className="case-list">
        {studies.map((s) => (
          <li key={s.num}>
            <a href={s.url} className="case-row">
              <span className="case-num">{s.num}</span>
              <span className="case-title">{s.title}</span>
              <span className="case-meta">{s.meta}</span>
              <span className="case-arr">→</span>
            </a>
          </li>
        ))}

        {/* Placeholder */}
        {studies.length === 0 && (
          <li>
            <div className="case-row case-empty">
              <span className="case-num">--</span>
              <span className="case-title">
                Case studies coming soon
                <br />
                (narrator: still gathering material…)
              </span>
              <span className="case-meta">in progress</span>
              <span className="case-arr">→</span>
            </div>
          </li>
        )}
      </ul>
    </section>
  );
}

// export function CaseStudies() {
//   return (
//     <section className="kit-cases">
//       <SectionHeader number={5} label="CASE STUDIES" hint="// long-form" id="case-studies" />
//       <ul className="case-list">
//         {studies.map((s) => (
//           <li key={s.num}>
//             <a href={s.url} className="case-row">
//               <span className="case-num">{s.num}</span>
//               <span className="case-title">{s.title}</span>
//               <span className="case-meta">{s.meta}</span>
//               <span className="case-arr">→</span>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

const entries = [
  { date: 'Apr 26, 2024', title: 'Setting up a Homelab: Part 1 Proxmox and LetsEncrypt ', tag: 'INFRA', url: "https://dev.to/shad0wcrawl3r/setting-up-a-homelab-part-1-proxmox-and-letsencrypt-3jn8" },
  // { date: '2026-03-02', title: 'Detection engineering without the noise', tag: 'SIEM' },
  // { date: '2026-01-18', title: 'Running Wazuh at scale on Kubernetes', tag: 'K8S' },
  // { date: '2025-11-04', title: 'Log pipelines: from rsyslog to ClickHouse', tag: 'PIPELINE' },
  // { date: '2025-08-22', title: 'MicroVMs for security evaluation sandboxes', tag: 'SYSTEMS' },
  // { date: '2025-06-11', title: 'SOAR playbooks, properly typed', tag: 'SOAR' },
];
export function Writing() {
  return (
    <section className="kit-writing">
      <SectionHeader number={6} label="WRITING" hint="// notes" id="writing" />

      <ul className="write-list">
        {entries.map((e) => (
          <li key={e.date}>
            <a href={e.url} className="write-row">
              <span className="write-date">{e.date}</span>
              <span className="write-title">{e.title}</span>
              <span className="write-tag">[{e.tag}]</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Coming soon section */}
      <div className="write-coming-soon">
        <p>
          More coming soon, when I win against procrastination.
        </p>
      </div>
    </section>
  );
}
// export function Writing() {
//   return (
//     <section className="kit-writing">
//       <SectionHeader number={6} label="WRITING" hint="// notes" id="writing" />
//       <ul className="write-list">
//         {entries.map((e) => (
//           <li key={e.date}>
//             <a href={e.url} className="write-row">
//               <span className="write-date">{e.date}</span>
//               <span className="write-title">{e.title}</span>
//               <span className="write-tag">[{e.tag}]</span>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }
