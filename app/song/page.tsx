import { PageHero } from "@/components/page-hero";
import { SongCard } from "@/components/song-card";
import { songs } from "@/lib/songs";

export default function SongPage() {
  return (
    <div className="space-y-5">
      <PageHero
        eyebrow="Songs"
        title="Song Library"
        description="Song-based Japanese study with lyrics, furigana, normal speech, vocabulary, grammar, nuance, and review."
      />

      <section className="grid gap-3 md:grid-cols-2">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </section>
    </div>
  );
}
