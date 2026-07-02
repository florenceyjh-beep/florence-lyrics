import { redirect } from "next/navigation";

type LessonPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return [{ id: "lesson-1" }, { id: "lesson-2" }];
}

export async function generateMetadata({ params }: LessonPageProps) {
  const { id } = await params;
  return {
    title: id === "lesson-2" ? "Drama Grand Prix - Chorus 1" : "Drama Grand Prix - Verse 1",
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { id } = await params;
  redirect(id === "lesson-2" ? "/song/drama-grand-prix#chorus-1" : "/song/drama-grand-prix#verse-1");
}
