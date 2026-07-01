import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { getGrammarPoints } from "@/lib/lessons";

export default function GrammarPage() {
  const grammar = getGrammarPoints();

  return (
    <div className="space-y-5">
      <PageHero
        eyebrow="Grammar"
        title="Patterns And Nuance"
        description="Grammar points are collected across lessons while staying linked to their lyric context."
      />
      <div className="space-y-3">
        {grammar.map((point) => (
          <Link
            key={`${point.lessonId}-${point.title}`}
            href={`/lesson/${point.lessonId}`}
            className="block rounded-md border border-line bg-white p-4 shadow-sm transition hover:border-accent"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-dark">
              {point.lessonTitle}
            </p>
            <h2 className="mt-1 text-xl font-black text-ink">{point.title}</h2>
            <p className="mt-2 text-sm text-muted">{point.body[0]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
