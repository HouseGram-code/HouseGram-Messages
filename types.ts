
export type Language = 'en' | 'ru';

export interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

export interface Content {
  nav: {
    features: string;
    cta: string;
  };
  // Added hero property to support the Hero component's requirements
  hero: {
    title: string;
  };
  features: {
    title: string;
    subtitle: string;
    cta: string;
    demo: {
      contactName: string;
      typing: string;
      placeholder: string;
      script: string[]; // Sequence of messages to auto-play
    };
  };
  footer: {
    copyright: string;
    links: string[];
  };
}