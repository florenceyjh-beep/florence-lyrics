import lesson1 from "@/data/lessons/lesson-1.json";
import lesson2 from "@/data/lessons/lesson-2.json";
import type { Lesson } from "@/lib/types";

export const lessons = [lesson1, lesson2] satisfies Lesson[];

export function getLesson(id: string) {
  return lessons.find((lesson) => lesson.id === id);
}

export function getVocabulary() {
  return lessons.flatMap((lesson) =>
    lesson.vocabulary.map((entry) => ({
      ...entry,
      lessonId: lesson.id,
      lessonTitle: `Lesson ${lesson.number}`,
    })),
  );
}

export function getGrammarPoints() {
  return lessons.flatMap((lesson) =>
    lesson.grammar.map((point) => ({
      ...point,
      lessonId: lesson.id,
      lessonTitle: `Lesson ${lesson.number}`,
    })),
  );
}
