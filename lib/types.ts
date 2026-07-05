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

export type NaturalnessRating = {
  stars: string;
  description: string;
  appropriateFor: string[];
};

export type LineStudy = {
  label: string;
  original: LyricChunk[];
  furigana?: RubyToken[];
  translation: string;
  normalSpeech: string;
  naturalness: NaturalnessRating;
  dailyAlternatives: string[];
  grammarNotes: string[];
  vocabulary: VocabularyEntry[];
  literaryInterpretation: string;
  literarySymbolism?: string;
};

export type SymbolismEntry = {
  title: string;
  body: string[];
  chinese: string[];
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

export type SongSection = {
  id: string;
  title: string;
  subtitle?: string;
  lineCount: number;
  learningGoals: string[];
  lyrics: LyricChunk[][];
  normalSpeech: NormalSpeechLine[];
  lineStudy?: LineStudy[];
  vocabulary: VocabularyEntry[];
  grammar: GrammarPoint[];
  nuance?: string;
  review: string[];
};

export type Song = {
  id: string;
  title: string;
  subtitle: string;
  artist?: string;
  titleMeaning: string[];
  theme?: string;
  mood?: string;
  keyExpressions?: string[];
  symbolism?: SymbolismEntry[];
  authorStyle?: {
    title: string;
    body: string[];
    chinese: string[];
  };
  sections: SongSection[];
};
