import Link from "next/link";
import { LessonCard } from "@/components/lesson-card";
import { PageHero } from "@/components/page-hero";
import { lessons } from "@/lib/lessons";

export default function HomePage() {
  return (
    <div className="space-y-5">
      <PageHero
        eyebrow="Mobile-first PWA"
        title="Florence Japanese"
        description="A song-based Japanese study app with reusable lesson structure, furigana, normal speech, vocabulary, grammar, nuance, and review."
        actions={
          <>
            <Link
              href="/lesson/lesson-1"
              className="rounded-md bg-accent px-4 py-2 text-sm font-bold text-white shadow-sm"
            >
              Start Lesson 1
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
              Current Song
            </p>
            <h2 className="text-2xl font-black text-ink">Drama Grand Prix</h2>
          </div>
          <Link href="/lesson" className="text-sm font-bold text-accent-dark">
            All lessons
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </section>
    </div>
  );
}
