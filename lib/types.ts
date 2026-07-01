export type RubyToken = {
  base: string;
  reading: string;
};

export type LyricChunk = {
  text: string;
  ruby?: RubyToken[];
};

export type NormalSpeechLine = {
  label: string;
  breakdown: string;
  ruby?: RubyToken[];
  natural: string;
  translation: string;
  note: string;
};

export type VocabularyEntry = {
  term: string;
  reading: string;
  meaning: string;
  note: string;
};

export type GrammarPoint = {
  title: string;
  body: string[];
};

export type Lesson = {
  id: string;
  number: number;
  songId: string;
  title: string;
  subtitle: string;
  lineCount: number;
  learningGoals: string[];
  lyrics: LyricChunk[][];
  normalSpeech: NormalSpeechLine[];
  vocabulary: VocabularyEntry[];
  grammar: GrammarPoint[];
  nuance: string;
  review: string[];
  srs: {
    enabled: boolean;
    cardCount: number;
    audioReady: boolean;
  };
};
