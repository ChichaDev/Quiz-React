export type Answer = {
  text: string;
  img?: string;
};

export type Question = {
  id: number;
  name: string;
  type: 'single' | 'multiple' | 'bubble';
  answers: Answer[];
};
