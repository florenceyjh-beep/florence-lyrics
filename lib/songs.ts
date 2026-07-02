import lesson1 from "@/data/lessons/lesson-1.json";
import lesson2 from "@/data/lessons/lesson-2.json";
import type { Lesson, Song, SongSection } from "@/lib/types";

function lessonToSection(lesson: Lesson, id: string, title: string): SongSection {
  return {
    id,
    title,
    subtitle: lesson.subtitle,
    lineCount: lesson.lineCount,
    learningGoals: lesson.learningGoals,
    lyrics: lesson.lyrics,
    normalSpeech: lesson.normalSpeech,
    vocabulary: lesson.vocabulary,
    grammar: lesson.grammar,
    nuance: lesson.nuance,
    review: lesson.review,
  };
}

export const songs = [
  {
    id: "drama-grand-prix",
    title: "Drama Grand Prix",
    subtitle: "Yorushika",
    titleMeaning: [
      '"Drama Grand Prix" literally means "Drama Grand Prix" or "Drama Championship."',
      'The title is ironic. Rather than referring to acting, the song portrays a world where people compete over suffering, victimhood, guilt, and emotional performance. Everyone is trying to become the most convincing "main character" of their own drama.',
    ],
    sections: [
      lessonToSection(lesson1, "verse-1", "Verse 1"),
      lessonToSection(lesson2, "chorus-1", "Chorus 1"),
    ],
  },
  {
    id: "isana",
    title: "いさな",
    subtitle: "Yorushika",
    titleMeaning: [
      "「いさな」 is an ancient Japanese word meaning \"whale.\"",
      "It is a poetic and literary word rarely used in modern daily conversation.",
      "Yorushika intentionally chose this word to create a quiet, dreamlike atmosphere from the very beginning.",
    ],
    sections: [
      {
        id: "verse-1",
        title: "Verse 1",
        lineCount: 0,
        learningGoals: [],
        lyrics: [],
        normalSpeech: [],
        vocabulary: [],
        grammar: [],
        review: [],
      },
      {
        id: "chorus-1",
        title: "Chorus 1",
        lineCount: 0,
        learningGoals: [],
        lyrics: [],
        normalSpeech: [],
        vocabulary: [],
        grammar: [],
        review: [],
      },
    ],
  },
] satisfies Song[];

export function getSong(id: string) {
  return songs.find((song) => song.id === id);
}

export function getVocabulary() {
  return songs.flatMap((song) =>
    song.sections.flatMap((section) =>
      section.vocabulary.map((entry) => ({
        ...entry,
        songId: song.id,
        sectionId: section.id,
        sourceTitle: `${song.title} - ${section.title}`,
      })),
    ),
  );
}

export function getGrammarPoints() {
  return songs.flatMap((song) =>
    song.sections.flatMap((section) =>
      section.grammar.map((point) => ({
        ...point,
        songId: song.id,
        sectionId: section.id,
        sourceTitle: `${song.title} - ${section.title}`,
      })),
    ),
  );
}

export function getReviewCards() {
  return songs.flatMap((song) =>
    song.sections.flatMap((section) =>
      section.review.map((prompt, index) => ({
        id: `${song.id}-${section.id}-${index}`,
        songId: song.id,
        sectionId: section.id,
        sourceTitle: `${song.title} - ${section.title}`,
        prompt,
        due: "Ready",
      })),
    ),
  );
}
