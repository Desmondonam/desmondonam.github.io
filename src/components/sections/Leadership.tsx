import SectionHeader from '../ui/SectionHeader';
import { leadership } from '../../data/leadership';

export default function Leadership() {
  return (
    <section id="leadership" className="section-shell bg-navy-800/40">
      <SectionHeader index="// 05" title="Leadership & Training Impact" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map((item) => (
          <div
            key={item.org}
            className="flex flex-col gap-3 rounded-md border border-navy-700 bg-navy-900 p-7"
          >
            <div className="font-display text-3xl font-bold text-gold">{item.value}</div>
            <div className="text-xs uppercase tracking-wider text-navy-400">{item.label}</div>
            <div className="mt-1 text-sm font-semibold text-ink">{item.org}</div>
            <p className="text-xs leading-relaxed text-navy-400">{item.context}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
