import { SectionHeader } from './SectionHeader';

type Status = 'live' | 'wip' | 'archived' | 'unknown';


type Project = {
  slug: string;
  description: string;
  stack: string[];
  status: Status;
  meta?: string;
  featured?: boolean;
  vcs?: string;
  license?: string;
  url?: string;
};

const intuition: Project = {
  slug: "intuition",
  description:
    "A custom Linux distribution tailored for network monitoring, built on a Debian-based or LFS foundation. It integrates LibreNMS for monitoring and features a custom frontend for asset management and data visualization.",
  stack: ["linux", "debian", "lfs", "librenms", "frontend"],
  status: "archived",
  meta: "Custom network monitoring OS with integrated dashboard",
  featured: true,
  license: 'MIT',
  url: "https://github.com/shad0wcrawl3r/Intuition.git"
}
const healthAlert: Project = {
  slug: "health-alert",
  description:
    "A Python-based monitoring script for Linux systems that logs CPU, memory, and storage metrics across remote hosts. Its modular design evolved into a lightweight monitoring system for managing infrastructure health.",
  stack: ["python", "linux", "monitoring"],
  status: "archived",
  meta: "Lightweight system monitoring and logging tool. Replaced by rusty-health-alert"
}

const pyvas: Project = {
  slug: "pyvas",
  description:
    "An orchestration library for automating OpenVAS workflows, including inventory refresh, vulnerability scans, and report generation, with seamless integration into the ELK stack.",
  stack: ["python", "openvas", "elk", "automation"],
  status: "archived",
  meta: "OpenVAS automation and ELK integration"
}

const fetcher: Project = {
  slug: "fetcher",
  description:
    "A lightweight ingestion module for importing metrics from PRTG Network Monitoring into the Elastic Stack, enabling centralized observability.",
  stack: ["python", "prtg", "elk", "monitoring"],
  status: "live",
  meta: "PRTG to ELK data ingestion tool"
}

const rustyHealthAlert: Project = {
  slug: "rusty-health-alert",
  description:
    "A Rust-based rewrite of Health Alert focused on performance and reliability, delivering faster execution and improved stability in production environments.",
  stack: ["rust", "linux", "monitoring"],
  status: "live",
  meta: "High-performance Rust rewrite of monitoring tool"
}

const artifactKeeper: Project = {
  slug: "artifact-keeper",
  description:
    "A custom artifact management service built on Python’s HTTP server, supporting uploads, deletions, authentication, and automated cleanup for CI/CD pipelines.",
  stack: ["python", "http", "ci-cd"],
  status: "live",
  meta: "CI/CD artifact storage and management service"
}

const supervisorNotifier: Project = {
  slug: "supervisor-notifier",
  description:
    "A Python-based notifier that integrates with Supervisor event listeners to send alerts on application events such as frequent restarts.",
  stack: ["python", "supervisor", "monitoring"],
  status: "live",
  meta: "Supervisor event alerting tool"
}

const dailyChallenger: Project = {
  slug: "daily-challenger",
  description:
    "A Rust daemon that posts daily challenges to Discord via webhooks, featuring a CLI for managing entries and a JSON-based configuration system.",
  stack: ["rust", "discord", "cli"],
  status: "unknown",
  meta: "Automated daily challenge poster"
}

const configurator: Project = {
  slug: "configurator",
  description:
    "A Go-based service manager for K0s Kubernetes clusters that automates deployment, health monitoring, and maintenance tasks like cleanup and log rotation.",
  stack: ["go", "kubernetes", "k0s", "devops"],
  status: "wip",
  meta: "K0s cluster service orchestration tool",
  featured: true
}
const nixos_hardware: Project = {
  slug: "nixos-hardware",
  description: "Not really a project, just my very first contribution to Opensource",
  stack: ["nixos", "hardware"],
  status: "live",
  meta: "NixOS hardware configuration",
  featured: true,
  vcs: "git",
  url: "https://github.com/NixOS/nixos-hardware/commit/27cca741bf6c532ea9ba394be806b04cbcbaefa1"
}
const projects: Project[] = [
  intuition, healthAlert, pyvas, fetcher, rustyHealthAlert, artifactKeeper, supervisorNotifier, dailyChallenger, configurator, nixos_hardware
];


function statusConfig(s: Status) {
  switch (s) {
    case 'live':
      return { icon: '🟢', label: 'LIVE' };
    case 'wip':
      return { icon: '🟡', label: 'WIP' };
    case 'archived':
      return { icon: '📦', label: 'ARCHIVED' };
    default:
      return { icon: '❓', label: 'UNKNOWN' };
  }
}

function statusLabel(s: Status) {
  const { icon, label } = statusConfig(s);
  return `${icon} ${label}`;
}
const sortedProjects = [...projects].sort(
  (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  // (a, b) => Number(b.featured) - Number(a.featured)
);

function ProjectCard({
  slug,
  description,
  stack,
  status,
  featured,
  meta,
  url = "",
  vcs = 'git',
  license = 'Internal'
}: Project) {

  const card = (<article className={`proj-card${featured ? ' featured' : ''}`}>
    <div className="proj-strip">
      <span>
    // PROJECT{featured ? ' · FEATURED' : ''}
      </span>

      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-link-inline"
        >
          View Project →
        </a>
      )}
    </div>
    {/* <div className="proj-strip"> */}
    {/*   // PROJECT{featured ? ' · FEATURED' : ''} */}
    {/*   {url && ( */}
    {/*     <> */}
    {/*       {' · '} */}
    {/*       <a */}
    {/*         href={url} */}
    {/*         target="_blank" */}
    {/*         rel="noopener noreferrer" */}
    {/*         className="proj-link-inline" */}
    {/*       > */}
    {/*         Goto Project */}
    {/*       </a> */}
    {/*     </> */}
    {/*   )} */}
    {/* </div> */}
    {/* <div className="proj-strip"> */}
    {/*   // PROJECT{featured ? ' · FEATURED' : ''}  */}
    {/* </div> */}
    <div className="proj-head">
      <h3 className="proj-slug"><span className="at">~/</span>{slug}</h3>
      <span className="proj-arr">→</span>
    </div>
    <p className="proj-desc">{description}</p>
    <div className="proj-tags">
      {stack.map((s) => <span className="chip" key={s}>{s}</span>)}
    </div>
    <div className="proj-meta">
      <span className={`proj-status ${status === 'live' ? 'live' : ''}`}>
        {statusLabel(status)}{meta ? ` · ${meta}` : ''}
      </span>
      <span className="proj-git">
        {vcs} · {license}
      </span>
    </div>
    {url && (
      <div className="proj-actions">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-btn"
        >
          Go to {vcs === 'github' ? 'GitHub' : 'Project'} →
        </a>
      </div>
    )}
  </article>
  )
  return card;
}
export function Github() {
  return (
    <section className="kit-github">
      <SectionHeader number={5} label="GITHUB" hint="// code + repos" id="github" />

      <div className="gh-card">
        <p className="gh-text">
          Explore more projects, commits, and experiments on my GitHub.
        </p>

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="gh-link"
        >
          → github.com/your-username
        </a>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <>
      <section className="kit-projects">
        <SectionHeader number={4} label="PROJECTS" hint="// featured + repos" id="projects" />
        <div className="proj-grid">
          {sortedProjects.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </section>
      {/* <Github /> */}

    </>
  );
}
