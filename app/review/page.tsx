import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { getReviewCards } from "@/lib/songs";

export default function ReviewPage() {
  const cards = getReviewCards();

  return (
    <div className="space-y-5">
      <PageHero
        eyebrow="Review"
        title="Future Spaced Repetition"
        description="The first review queue is generated from song review points and is ready to evolve into SRS scheduling."
      />

      <section className="rounded-md border border-line bg-white p-4 shadow-sm sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-black text-ink">Review Queue</h2>
            <p className="text-sm text-muted">{cards.length} starter cards from current songs</p>
          </div>
          <span className="rounded-full bg-soft px-3 py-1 text-xs font-bold text-accent-dark">
            SRS prepared
          </span>
        </div>
      </section>

      <div className="space-y-3">
        {cards.map((card) => (
          <Link
            key={card.id}
            href={`/song/${card.songId}#${card.sectionId}`}
            className="block rounded-md border border-line bg-white p-4 shadow-sm transition hover:border-accent"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold text-ink">{card.prompt}</p>
              <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-muted">
                {card.due}
              </span>
            </div>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-muted">
              {card.sourceTitle}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
