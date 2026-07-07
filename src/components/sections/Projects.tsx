import { Brain, Waves, BarChart, Mountain, Zap, GraduationCap, type LucideIcon } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { projects } from '../../data/projects';

const ICONS: Record<string, LucideIcon> = { Brain, Waves, BarChart, Mountain, Zap, GraduationCap };

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeader index="// 04" title="Projects" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const Icon = ICONS[project.icon];
          return (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-md border border-navy-700 bg-navy-800 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-soft transition-transform duration-300 group-hover:scale-x-100" />
              <Icon className="mb-5 text-accent-soft" size={26} />
              <h3 className="mb-3 font-display text-lg font-semibold text-ink">{project.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-navy-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
