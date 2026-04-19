import { SectionHeader } from './SectionHeader';

type Role = {
  title: string;
  org: string;
  company: string;
  period: string;
  range: string;
  bullets: string[];
  projects?: {
    name: string;
    href?: string; // 👈 for linking
  }[];
};

const roles: Role[] = [
  {
    title: 'Team Lead, Research and Development',
    org: 'systems · experimentation',
    company: 'Vairav Technology, Kathmandu, Nepal',
    period: 'Nov 2024 — Present',
    range: '2024 — present',
    bullets: [
      'Assessed feature feasibility aligned with business and technical goals.',
      'Prioritized use cases based on security and business impact.',
      'Built prototypes to test performance and identify early-stage issues.',
      'Integrated new tools to optimize deployment and system maintainability.',
    ],
    projects: [
      { name: 'Orchestra' },
    ],
  },
  {
    title: 'DevOps Developer',
    org: 'infrastructure · platform',
    company: 'Teslatech Nepal, Lalitpur, Nepal',
    period: 'Mar 2023 — Nov 2024',
    range: '2023 — 2024',
    bullets: [
      'Automated CI/CD pipelines to replace manual build, test, and deployment processes.',
      'Deployed and maintained server and application monitoring solutions.',
      'Improved internal DevOps tools through ongoing development and research.',
    ],
    projects: [
      { name: 'ArtifactKeeper' },
      { name: 'Supervisor Notifier' },
      { name: 'Daily Challenger' },
    ],
  },
  {
    title: 'SIEM / Security Engineer',
    org: 'security · detection',
    company: 'Vairav Technology, Kathmandu, Nepal',
    period: 'Sep 2020 — Mar 2023',
    range: '2020 — 2023',
    bullets: [
      'Gained hands-on exposure to SOC operations, SIEM, GRC, and VAPT.',
      'Promoted to Associate SIEM Engineer, specializing in threat detection workflows.',
      'Managed Linux systems and Elastic Stack with Wazuh integration.',
      'Researched third-party integrations to enhance security workflows.',
    ],
    projects: [
      { name: 'HealthCheck' },
      { name: 'Rusty HealthCheck' },
      { name: 'PyVas' },
      { name: 'Fetcher' },
    ],
  },
  {
    title: 'Systems Administration Intern',
    org: 'infrastructure · operations',
    company: 'Loop Networks, Kathmandu, Nepal',
    period: 'Apr 2019 — Sep 2020',
    range: '2019 — 2020',
    bullets: [
      'Managed mail server configuration and maintenance for secure, reliable delivery.',
      'Assisted in database server setup, configuration, and upkeep.',
      'Handled web hosting environments, including deployment and troubleshooting.',
      'Configured and maintained DNS to ensure service and website accessibility.',
    ],
    projects: [
      { name: 'Intuition' },
    ],
  },
];
// const roles: Role[] = [
//   {
//     title: 'SIEM Engineer',
//     team: 'security · detection team',
//     org: 'security · detection team',
//     period: '2.5+ years',
//     range: '2023 — present',
//     bullets: [
//       'Built and optimized log ingestion and alerting pipelines at scale.',
//       'Owned detection engineering across a multi-tenant monitoring stack.',
//       'Worked with large-scale security telemetry (Kafka → ClickHouse → SIEM).',
//     ],
//   },
//   {
//     title: 'DevOps Developer',
//     team: 'security · detection team',
//     org: 'infrastructure · platform',
//     period: '1y 8m',
//     range: '2021 — 2023',
//     bullets: [
//       'Managed infrastructure using Kubernetes and Terraform.',
//       'Built deployment and scaling automation across environments.',
//       'NGINX ingress, service-mesh policies, and cluster hardening.',
//     ],
//   },
//   {
//     title: 'R&D Team Lead',
//     org: 'systems · experimentation',
//     team: 'security · detection team',
//     period: '1y 6m',
//     range: '2020 — 2021',
//     bullets: [
//       'Led experimental systems across security and infrastructure.',
//       'Prototyped tools spanning observability, AI, and orchestration.',
//       'MicroVMs (Firecracker, QEMU) for isolated evaluation sandboxes.',
//     ],
//   },
// ];

export function Experience() {
  return (
    <section className="kit-experience">
      <SectionHeader number={3} label="EXPERIENCE" hint="// ~5y" id="experience" />
      <div className="xp-list">
        {roles.map((r, idx) => (
          <div className="xp-row" key={r.title}>
            <div className="xp-left">
              <div className="xp-idx">{String(idx + 1).padStart(2, '0')}</div>
              <div className="xp-company">{r.company}</div> {/* 👈 new */}
              <div className="xp-range">{r.range}</div>
              <div className="xp-period">{r.period}</div>
            </div>
            <div className="xp-body">
              <div className="xp-head">
                <h3 className="xp-title">{r.title}</h3>
                <span className="xp-org">/ {r.org}</span>
              </div>
              <ul className="xp-bullets">
                {r.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              {r.projects && (
                <div className="xp-projects">
                  {r.projects.map((p) => (
                    <a key={p.name} href={p.href || '#'} className="xp-project">
                      {p.name}
                    </a>
                  ))}
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
