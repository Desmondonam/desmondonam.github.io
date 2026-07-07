// To add the real photo: place a file named exactly "profile.jpg" in the
// public/ folder at repo root. No code changes needed — this component
// probes for it at runtime and falls back to initials if it's missing.
import { useState } from 'react';
import { profile } from '../../data/profile';

interface AvatarProps {
  size?: number;
}

export default function Avatar({ size = 260 }: AvatarProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-2xl border border-navy-600/60 bg-gradient-to-br from-navy-700 to-navy-900 shadow-[0_0_60px_rgba(59,130,246,0.15)]"
      style={{ width: size, height: size }}
    >
      {!imgFailed ? (
        <img
          src="/profile.jpg"
          alt={profile.name}
          onError={() => setImgFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-700 via-navy-800 to-accent/20">
          <span className="font-display text-6xl font-bold tracking-tight text-ink/80">
            {profile.initials}
          </span>
        </div>
      )}
    </div>
  );
}
