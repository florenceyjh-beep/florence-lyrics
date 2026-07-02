import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { getVocabulary } from "@/lib/songs";

export default function VocabularyPage() {
  const vocabulary = getVocabulary();

  return (
    <div className="space-y-5">
      <PageHero
        eyebrow="Vocabulary"
        title="Words From The Lyrics"
        description="A unified vocabulary bank generated from every song section."
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {vocabulary.map((entry) => (
          <Link
            key={`${entry.songId}-${entry.sectionId}-${entry.term}-${entry.reading}`}
            href={`/song/${entry.songId}#${entry.sectionId}`}
            className="rounded-md border border-line bg-white p-4 shadow-sm transition hover:border-accent"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-xl font-black text-ink">{entry.term}</h2>
              <p className="text-sm font-bold text-accent-dark">{entry.reading}</p>
            </div>
            <p className="mt-2 text-sm text-ink">{entry.meaning}</p>
            <p className="mt-2 text-xs text-muted">{entry.note}</p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-muted">
              {entry.sourceTitle}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
