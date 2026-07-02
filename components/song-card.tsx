import Link from "next/link";
import type { Song } from "@/lib/types";

export function SongCard({ song }: { song: Song }) {
  const lineCount = song.sections.reduce((sum, section) => sum + section.lineCount, 0);

  return (
    <Link
      href={`/song/${song.id}`}
      className="block rounded-md border border-line bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-dark">
            Song
          </p>
          <h2 className="mt-1 text-xl font-black leading-snug text-ink">{song.title}</h2>
          <p className="mt-2 text-sm text-muted">{song.subtitle}</p>
        </div>
        <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">
          {lineCount} lines
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {song.sections.map((section) => (
          <span
            key={section.id}
            className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-accent-dark"
          >
            {section.title}
          </span>
        ))}
      </div>
    </Link>
  );
}
