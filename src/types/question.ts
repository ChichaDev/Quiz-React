export type Answer = {
  text: string;
  img?: string;
};

export type Question = {
  id: number;
  order: number;
  name: string;
  description?: string;
  type: 'single' | 'multiple' | 'bubble';
  select?: 'single' | 'multiple';
  answers?: Answer[];
};
