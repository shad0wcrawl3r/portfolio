type NavItem = { id: string; label: string };

const items: NavItem[] = [
  { id: 'about', label: '~/about' },
  { id: 'skills', label: '~/skills' },
  { id: 'experience', label: '~/experience' },
  { id: 'projects', label: '~/projects' },
  { id: 'writing', label: '~/writing' },
  { id: 'contact', label: '~/contact' },
];

type Props = {
  active: string;
  onNav: (id: string) => void;
};

export function Nav({ active, onNav }: Props) {
  return (
    <nav className="kit-nav">
      <div className="brand">
        <span className="mark">~</span>
        <span className="name">ashwin.belbase</span>
      </div>
      <div className="links">
        {items.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            className={active === i.id ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              onNav(i.id);
            }}
          >
            {i.label}
          </a>
        ))}
      </div>
      <div className="status">
        <span className="dot" />
        <span>online · UTC+5:45</span>
      </div>
    </nav>
  );
}
