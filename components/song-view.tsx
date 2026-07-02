import type { ReactNode } from "react";
import type { Song, SongSection } from "@/lib/types";
import { RubyText } from "@/components/ruby-text";

function CardSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-md border border-line bg-white p-4 shadow-sm sm:p-5">
      <h3 className="text-lg font-black text-ink">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function EmptySection() {
  return <div className="min-h-6" />;
}

function LearningSection({ section }: { section: SongSection }) {
  const hasContent =
    section.learningGoals.length ||
    section.lyrics.length ||
    section.normalSpeech.length ||
    section.vocabulary.length ||
    section.grammar.length ||
    section.nuance ||
    section.review.length;

  return (
    <section id={section.id} className="space-y-4 scroll-mt-24">
      <div className="rounded-md border border-line bg-white p-4 shadow-sm sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-dark">
              Song Section
            </p>
            <h2 className="mt-1 text-2xl font-black leading-tight text-ink">{section.title}</h2>
            {section.subtitle ? <p className="mt-2 text-sm text-muted">{section.subtitle}</p> : null}
          </div>
          <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">
            {section.lineCount} lines
          </span>
        </div>
      </div>

      {hasContent ? (
        <>
          <CardSection title="Learning Goals">
            {section.learningGoals.length ? (
              <ul className="space-y-2 text-sm text-ink">
                {section.learningGoals.map((goal) => (
                  <li key={goal} className="rounded-md bg-paper px-3 py-2">
                    {goal}
                  </li>
                ))}
              </ul>
            ) : (
              <EmptySection />
            )}
          </CardSection>

          <CardSection title="Lyrics with Furigana">
            {section.lyrics.length ? (
              <div className="rounded-md border border-[#f0dfc3] bg-cream p-4 text-lg leading-loose text-ink">
                {section.lyrics.map((line, index) => (
                  <p key={index}>
                    {line.map((chunk, chunkIndex) => (
                      <RubyText key={chunkIndex} text={chunk.text} ruby={chunk.ruby} />
                    ))}
                  </p>
                ))}
              </div>
            ) : (
              <EmptySection />
            )}
          </CardSection>

          <CardSection title="Normal Speech with Translation">
            {section.normalSpeech.length ? (
              <div className="space-y-3">
                {section.normalSpeech.map((line, index) => (
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
            ) : (
              <EmptySection />
            )}
          </CardSection>

          <CardSection title="Vocabulary">
            {section.vocabulary.length ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {section.vocabulary.map((entry) => (
                  <div
                    key={`${entry.term}-${entry.reading}`}
                    className="rounded-md border border-line p-3"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-lg font-black text-ink">{entry.term}</h3>
                      <p className="text-sm font-semibold text-accent-dark">{entry.reading}</p>
                    </div>
                    <p className="mt-1 text-sm text-ink">{entry.meaning}</p>
                    <p className="mt-2 text-xs text-muted">{entry.note}</p>
                  </div>
                ))}
              </div>
            ) : (
              <EmptySection />
            )}
          </CardSection>

          <CardSection title="Grammar">
            {section.grammar.length ? (
              <div className="space-y-3">
                {section.grammar.map((point, index) => (
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
            ) : (
              <EmptySection />
            )}
          </CardSection>

          <CardSection title="Nuance">
            {section.nuance ? (
              <p className="rounded-md border border-[#cfeadf] bg-mint p-4 text-sm text-ink">
                {section.nuance}
              </p>
            ) : (
              <EmptySection />
            )}
          </CardSection>

          <CardSection title="Review">
            {section.review.length ? (
              <ul className="space-y-2 text-sm text-ink">
                {section.review.map((item) => (
                  <li key={item} className="rounded-md bg-paper px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <EmptySection />
            )}
          </CardSection>
        </>
      ) : (
        <div className="rounded-md border border-line bg-white p-4 shadow-sm sm:p-5">
          <EmptySection />
        </div>
      )}
    </section>
  );
}

export function SongView({ song }: { song: Song }) {
  const lineCount = song.sections.reduce((sum, section) => sum + section.lineCount, 0);

  return (
    <article className="space-y-5">
      <div className="rounded-md border border-line bg-white p-4 shadow-sm sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-dark">
              Song
            </p>
            <h1 className="mt-1 text-3xl font-black leading-tight text-ink">{song.title}</h1>
            <p className="mt-2 text-sm text-muted">{song.subtitle}</p>
          </div>
          <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">
            {lineCount} lines
          </span>
        </div>
      </div>

      <CardSection title="Title Meaning">
        <div className="space-y-2 text-sm text-ink">
          {song.titleMeaning.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CardSection>

      {song.sections.map((section) => (
        <LearningSection key={section.id} section={section} />
      ))}
    </article>
  );
}
