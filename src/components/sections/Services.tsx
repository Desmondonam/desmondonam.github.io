import { BarChart3, Database, Cpu, GraduationCap, Compass, type LucideIcon } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { services } from '../../data/services';

const ICONS: Record<string, LucideIcon> = { BarChart3, Database, Cpu, GraduationCap, Compass };

export default function Services() {
  return (
    <section id="services" className="section-shell">
      <SectionHeader index="// 02" title="Services" />
      <p className="-mt-8 mb-12 max-w-2xl text-sm text-navy-400 md:text-[15px]">
        I partner with organizations and individuals on data and AI work — as a consultant, an engineer, or a
        trainer. Here's how we can work together.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = ICONS[service.icon];
          return (
            <div
              key={service.title}
              className="group relative flex flex-col gap-4 rounded-md border border-navy-700 bg-navy-800 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent-soft">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">{service.title}</h3>
              <p className="text-sm leading-relaxed text-navy-400">{service.pitch}</p>
            </div>
          );
        })}
        <div className="flex flex-col justify-center gap-4 rounded-md border border-dashed border-navy-600 bg-navy-800/40 p-8">
          <h3 className="font-display text-lg font-semibold text-ink">Have a project in mind?</h3>
          <p className="text-sm leading-relaxed text-navy-400">
            Let's talk through your data, ML, or training needs and scope out the right engagement.
          </p>
          <Button href="#contact" className="w-fit">
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
