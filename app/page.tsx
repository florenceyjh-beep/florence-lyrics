import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SongCard } from "@/components/song-card";
import { songs } from "@/lib/songs";

export default function HomePage() {
  return (
    <div className="space-y-5">
      <PageHero
        eyebrow="Mobile-first PWA"
        title="Florence Japanese"
        description="A song-based Japanese study app with furigana, normal speech, vocabulary, grammar, nuance, and review."
        actions={
          <>
            <Link
              href="/song/drama-grand-prix"
              className="rounded-md bg-accent px-4 py-2 text-sm font-bold text-white shadow-sm"
            >
              Start Drama Grand Prix
            </Link>
            <Link
              href="/review"
              className="rounded-md border border-line bg-white px-4 py-2 text-sm font-bold text-ink"
            >
              Review Queue
            </Link>
          </>
        }
      />

      <section>
        <div className="mb-3 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-dark">
              Current Songs
            </p>
            <h2 className="text-2xl font-black text-ink">Songs</h2>
          </div>
          <Link href="/song" className="text-sm font-bold text-accent-dark">
            All songs
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </section>
    </div>
  );
}
