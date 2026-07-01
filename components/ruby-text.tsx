import type { ReactNode } from "react";
import type { RubyToken } from "@/lib/types";

type RubyTextProps = {
  text: string;
  ruby?: RubyToken[];
  className?: string;
};

export function RubyText({ text, ruby = [], className }: RubyTextProps) {
  const parts: ReactNode[] = [];
  let rest = text;
  let key = 0;

  ruby.forEach((token) => {
    const index = rest.indexOf(token.base);
    if (index === -1) return;

    const before = rest.slice(0, index);
    if (before) parts.push(<span key={`text-${key++}`}>{before}</span>);

    parts.push(
      <ruby key={`ruby-${key++}`}>
        {token.base}
        <rt>{token.reading}</rt>
      </ruby>,
    );
    rest = rest.slice(index + token.base.length);
  });

  if (rest) parts.push(<span key={`text-${key++}`}>{rest}</span>);

  return <span className={className}>{parts}</span>;
}
