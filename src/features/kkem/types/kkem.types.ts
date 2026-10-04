export type cardProps = {
  name: string;
  image: string;
  link: string;
  description: string;
  largeImg?: boolean;
  date?: string;
};

export type IGSectionProps = {
  cards: cardProps[];
  heading?: string;
  largeImg?: boolean;
};
