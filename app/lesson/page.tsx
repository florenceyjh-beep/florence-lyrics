import { LessonCard } from "@/components/lesson-card";
import { PageHero } from "@/components/page-hero";
import { lessons } from "@/lib/lessons";

export default function LessonIndexPage() {
  return (
    <div className="space-y-5">
      <PageHero
        eyebrow="Lessons"
        title="Reusable Lesson Library"
        description="Each lesson is generated from JSON and rendered through the same component structure."
      />
      <div className="grid gap-3 md:grid-cols-2">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
