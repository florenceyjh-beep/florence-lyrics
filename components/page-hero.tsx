import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({ eyebrow, title, description, actions }: PageHeroProps) {
  return (
    <section className="mb-5 rounded-md border border-line bg-gradient-to-br from-white to-soft p-5 sm:p-7">
      {eyebrow ? (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-dark">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-3xl text-3xl font-black leading-tight text-ink sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">{description}</p>
      {actions ? <div className="mt-5 flex flex-wrap gap-2">{actions}</div> : null}
    </section>
  );
}
