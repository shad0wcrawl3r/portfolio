import { ShieldCheck, Server, Cpu, Code2, type LucideIcon } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

type Group = {
  Icon: LucideIcon;
  label: string;
  items: string[];
};

const groups: Group[] = [
  { Icon: ShieldCheck, label: 'Security', items: ['SIEM', 'SOAR', 'Wazuh', 'Suricata', 'Detection Engineering'] },
  { Icon: Server,      label: 'DevOps',   items: ['Kubernetes', 'Terraform', 'Kafka', 'CI/CD', 'NGINX'] },
  { Icon: Cpu,         label: 'Systems',  items: ['Linux', 'Networking', 'QEMU', 'Firecracker'] },
  { Icon: Code2,       label: 'Tools & Langs', items: ['Go', 'Bash', 'Python'] },
];

export function Skills() {
  return (
    <section className="kit-skills">
      <SectionHeader number={2} label="SKILLS" hint="// stack" id="skills" />
      <div className="skills-grid">
        {groups.map(({ Icon, label, items }) => (
          <div className="skill-col" key={label}>
            <div className="skill-head">
              <span className="ic"><Icon size={16} strokeWidth={1.5} /></span>
              <span className="skill-label">{label}</span>
            </div>
            <div className="skill-tags">
              {items.map((it) => (
                <span className="chip" key={it}>{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
