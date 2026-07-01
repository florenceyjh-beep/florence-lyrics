import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { lessons } from "@/lib/lessons";

export default function SongPage() {
  const lineTotal = lessons.reduce((sum, lesson) => sum + lesson.lineCount, 0);

  return (
    <div className="space-y-5">
      <PageHero
        eyebrow="Song"
        title="Drama Grand Prix"
        description="The current course is organized around lyric sections that become small, repeatable Japanese lessons."
      />

      <section className="rounded-md border border-line bg-white p-4 shadow-sm sm:p-5">
        <h2 className="text-xl font-black text-ink">Course Map</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-md bg-soft p-4">
            <p className="text-3xl font-black text-accent-dark">{lessons.length}</p>
            <p className="text-sm font-semibold text-muted">lessons</p>
          </div>
          <div className="rounded-md bg-cream p-4">
            <p className="text-3xl font-black text-ink">{lineTotal}</p>
            <p className="text-sm font-semibold text-muted">lyric lines</p>
          </div>
          <div className="rounded-md bg-mint p-4">
            <p className="text-3xl font-black text-ink">7</p>
            <p className="text-sm font-semibold text-muted">sections each</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={`/lesson/${lesson.id}`}
            className="block rounded-md border border-line bg-white p-4 shadow-sm transition hover:border-accent"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-dark">
              Lesson {lesson.number}
            </p>
            <h2 className="mt-1 text-xl font-black text-ink">{lesson.title}</h2>
            <p className="mt-2 text-sm text-muted">
              Learning Goals {"->"} Lyrics {"->"} Normal Speech {"->"} Vocabulary {"->"} Grammar{" "}
              {"->"} Nuance {"->"} Review
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
