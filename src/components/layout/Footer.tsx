import { profile } from '../../data/profile';

export default function Footer() {
  return (
    <footer className="relative z-10 flex flex-col items-center gap-2 border-t border-navy-700/60 px-6 py-7 text-xs text-navy-400 md:flex-row md:justify-between md:px-16 lg:px-24">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span className="text-accent-soft">{profile.title}</span>
      <span>{profile.location}</span>
    </footer>
  );
}
