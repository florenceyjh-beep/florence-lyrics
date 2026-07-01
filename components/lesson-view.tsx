import type { ReactNode } from "react";
import type { Lesson } from "@/lib/types";
import { RubyText } from "@/components/ruby-text";

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-md border border-line bg-white p-4 shadow-sm sm:p-5">
      <h2 className="text-lg font-black text-ink">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function LessonView({ lesson }: { lesson: Lesson }) {
  return (
    <article className="space-y-4">
      <div className="rounded-md border border-line bg-white p-4 shadow-sm sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-dark">
              Lesson {lesson.number}
            </p>
            <p className="mt-2 text-sm text-muted">{lesson.subtitle}</p>
          </div>
          <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">
            {lesson.lineCount} lines
          </span>
        </div>
      </div>

      <Section title="Learning Goals">
        <ul className="space-y-2 text-sm text-ink">
          {lesson.learningGoals.map((goal) => (
            <li key={goal} className="rounded-md bg-paper px-3 py-2">
              {goal}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Lyrics with Furigana">
        <div className="rounded-md border border-[#f0dfc3] bg-cream p-4 text-lg leading-loose text-ink">
          {lesson.lyrics.map((line, index) => (
            <p key={index}>
              {line.map((chunk, chunkIndex) => (
                <RubyText key={chunkIndex} text={chunk.text} ruby={chunk.ruby} />
              ))}
            </p>
          ))}
        </div>
      </Section>

      <Section title="Normal Speech with Translation">
        <div className="space-y-3">
          {lesson.normalSpeech.map((line, index) => (
            <details
              key={line.label}
              open={index === 0}
              className="rounded-md border border-line bg-white p-3"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-3 font-bold text-ink">
                {line.label}
                <span className="text-xs text-muted">tap</span>
              </summary>
              <div className="mt-3 space-y-3 text-sm">
                <p className="rounded-md border border-line bg-paper p-3 text-base leading-loose">
                  <RubyText text={line.breakdown} ruby={line.ruby} />
                </p>
                <p className="border-l-4 border-accent pl-3">
                  <span className="font-bold">正常说话：</span>
                  {line.natural}
                </p>
                <p className="rounded-md bg-mint p-3">
                  <span className="font-bold">Translation: </span>
                  {line.translation}
                </p>
                <p className="text-muted">{line.note}</p>
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section title="Vocabulary">
        <div className="grid gap-3 sm:grid-cols-2">
          {lesson.vocabulary.map((entry) => (
            <div key={`${entry.term}-${entry.reading}`} className="rounded-md border border-line p-3">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-black text-ink">{entry.term}</h3>
                <p className="text-sm font-semibold text-accent-dark">{entry.reading}</p>
              </div>
              <p className="mt-1 text-sm text-ink">{entry.meaning}</p>
              <p className="mt-2 text-xs text-muted">{entry.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Grammar">
        <div className="space-y-3">
          {lesson.grammar.map((point, index) => (
            <details
              key={point.title}
              open={index === 0}
              className="rounded-md border border-line bg-white p-3"
            >
              <summary className="cursor-pointer font-bold text-ink">{point.title}</summary>
              <div className="mt-3 space-y-2 text-sm text-muted">
                {point.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section title="Nuance">
        <p className="rounded-md border border-[#cfeadf] bg-mint p-4 text-sm text-ink">
          {lesson.nuance}
        </p>
      </Section>

      <Section title="Review">
        <ul className="space-y-2 text-sm text-ink">
          {lesson.review.map((item) => (
            <li key={item} className="rounded-md bg-paper px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </article>
  );
}
