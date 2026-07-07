import SectionHeader from '../ui/SectionHeader';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader index="// 06" title="Experience" />
      <div className="relative">
        <div className="absolute bottom-0 left-0 top-0 w-px bg-navy-700" />
        <div className="flex flex-col gap-14">
          {experience.map((item) => (
            <div key={item.role + item.period} className="relative pl-10">
              <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_theme(colors.accent.DEFAULT)]" />
              <div className="mb-1.5 font-mono text-xs tracking-wider text-gold">{item.period}</div>
              <h3 className="font-display text-xl font-bold tracking-tight text-ink">{item.role}</h3>
              <div className="mb-3.5 text-sm text-accent-soft">{item.company}</div>
              <ul className="flex flex-col gap-1.5">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-4 text-sm leading-relaxed text-navy-400">
                    <span className="absolute left-0 text-accent">→</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
