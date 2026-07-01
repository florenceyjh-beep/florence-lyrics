import Link from "next/link";
import type { Lesson } from "@/lib/types";

export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link
      href={`/lesson/${lesson.id}`}
      className="block rounded-md border border-line bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-dark">
            Lesson {lesson.number}
          </p>
          <h2 className="mt-1 text-xl font-black leading-snug text-ink">{lesson.title}</h2>
          <p className="mt-2 text-sm text-muted">{lesson.subtitle}</p>
        </div>
        <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">
          {lesson.lineCount} lines
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-accent-dark">
          Lyrics
        </span>
        <span className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-muted">
          Grammar
        </span>
        <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-muted">
          Review
        </span>
      </div>
    </Link>
  );
}
