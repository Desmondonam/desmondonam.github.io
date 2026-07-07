import { Github, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 md:px-16 lg:px-24"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[600px] w-[600px] rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent-soft">
            <span className="block h-px w-6 bg-accent-soft" />
            {profile.location} · {profile.locationNote}
          </div>

          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Desmond Onam
          </h1>
          <p className="mt-3 font-display text-xl font-medium text-accent-soft md:text-2xl">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-navy-400 md:text-base">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#projects">View Projects</Button>
            <Button variant="outline" href={profile.social.github} target="_blank" rel="noopener noreferrer">
              <Github size={14} /> GitHub
            </Button>
            <Button variant="outline" href="#contact">
              <Mail size={14} /> Contact
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-navy-700/60 pt-9 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-accent">{stat.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-navy-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <Avatar size={260} />
      </div>
    </section>
  );
}
