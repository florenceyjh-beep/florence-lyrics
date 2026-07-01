import { notFound } from "next/navigation";
import { LessonView } from "@/components/lesson-view";
import { getLesson, lessons } from "@/lib/lessons";

type LessonPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return lessons.map((lesson) => ({ id: lesson.id }));
}

export async function generateMetadata({ params }: LessonPageProps) {
  const { id } = await params;
  const lesson = getLesson(id);
  return {
    title: lesson ? `Lesson ${lesson.number}: ${lesson.title}` : "Lesson",
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { id } = await params;
  const lesson = getLesson(id);

  if (!lesson) notFound();

  return <LessonView lesson={lesson} />;
}
