import SectionHeader from '../ui/SectionHeader';
import { skillCategories } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section-shell bg-navy-800/40">
      <SectionHeader index="// 07" title="Tech Stack" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="rounded-md border border-navy-700 bg-navy-900 p-7">
            <div className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-accent">
              {cat.title}
            </div>
            <ul className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-navy-700 px-2.5 py-1 text-xs text-navy-400 transition-colors hover:border-accent/40 hover:text-accent-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
