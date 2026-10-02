export type Category =
  | 'Psychology'
  | 'Human Behaviour'
  | 'Mysteries'
  | 'Internet'
  | 'History'
  | 'Science'
  | 'Strange'
  | 'Coincidences';

export type InteractionType = 'multiple-choice' | 'true-false' | 'reveal' | 'sequence' | 'slider';

export interface Source {
  title: string;
  url: string;
  note?: string;
}

export interface InteractionOption {
  label: string;
  correct?: boolean;
  feedback: string;
}

export interface StoryInteraction {
  type: InteractionType;
  prompt: string;
  options?: InteractionOption[];
  reveal?: string;
  steps?: string[];
  slider?: { min: number; max: number; start: number; left: string; right: string; revealAt: number; feedback: string };
}

export interface Story {
  id: number;
  slug: string;
  category: Category;
  title: string;
  hook: string;
  description: string;
  minutes: number;
  curiosity: number;
  visual: string;
  tags: string[];
  status?: 'FACT' | 'THEORY' | 'DISPUTED' | 'UNVERIFIED' | 'POPULAR CLAIM';
  sections: { heading: string; paragraphs: string[] }[];
  interaction: StoryInteraction;
  rabbitHole: string[];
  related: string[];
  sources: Source[];
}

export interface QuizQuestion {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  questions: QuizQuestion[];
  result: { name: string; description: string }[];
}
