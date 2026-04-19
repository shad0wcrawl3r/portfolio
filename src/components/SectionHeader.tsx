type Props = {
  number: number;
  label: string;
  hint?: string;
  id?: string;
};

export function SectionHeader({ number, label, hint, id }: Props) {
  const slug = id ?? label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="section-header" id={slug}>
      <span className="section-tag">[ {String(number).padStart(2, '0')} / {label} ]</span>
      <span className="section-rule" />
      {hint && <span className="section-hint">{hint}</span>}
    </div>
  );
}
