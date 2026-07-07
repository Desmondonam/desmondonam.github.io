import { Github, Linkedin, Mail } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { profile } from '../../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="section-shell text-center">
      <SectionHeader index="// 08" title="Let's Build" center />
      <p className="mx-auto -mt-8 mb-10 max-w-lg text-sm text-navy-400 md:text-[15px]">
        Open to consulting engagements, full-time remote roles, training partnerships, and speaking
        opportunities in AI, Data Engineering, and Machine Learning.
      </p>
      <div className="flex flex-wrap justify-center gap-5">
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-sm border border-navy-700 px-7 py-3.5 text-xs uppercase tracking-widest text-navy-400 transition-colors hover:border-accent hover:text-accent-soft"
        >
          <Github size={15} /> GitHub
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-sm border border-navy-700 px-7 py-3.5 text-xs uppercase tracking-widest text-navy-400 transition-colors hover:border-accent hover:text-accent-soft"
        >
          <Linkedin size={15} /> LinkedIn
        </a>
        <a
          href={`mailto:${profile.social.email}`}
          className="flex items-center gap-2 rounded-sm border border-navy-700 px-7 py-3.5 text-xs uppercase tracking-widest text-navy-400 transition-colors hover:border-accent hover:text-accent-soft"
        >
          <Mail size={15} /> Email
        </a>
      </div>
    </section>
  );
}
