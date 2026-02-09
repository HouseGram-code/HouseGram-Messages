
import { Content, Language } from './types';

export const TRANSLATIONS: Record<Language, Content> = {
  en: {
    nav: {
      features: "Experience",
      cta: "Launch Web App",
    },
    // Added hero section content for English
    hero: {
      title: "HouseGram Red",
    },
    features: {
      title: "The Ultimate Interface",
      subtitle: "Experience the fluidity of HouseGram Red. Designed for those who demand speed and style.",
      cta: "Open Web App",
      demo: {
        contactName: "Alice",
        typing: "is typing...",
        placeholder: "Type a message...",
        script: [
          "Hey! Check out the new dark mode.",
          "Wow, this Red & Black theme is stunning! 🔴⚫️",
          "And the speed? Instant.",
          "Sending a photo now...",
          "Received instantly. This is the future.",
        ]
      },
    },
    footer: {
      copyright: "© 2026 HouseGram Inc. All rights reserved.",
      links: ["Privacy", "Terms", "Contact", "Blog"],
    },
  },
  ru: {
    nav: {
      features: "Опыт",
      cta: "Веб-приложение",
    },
    // Added hero section content for Russian
    hero: {
      title: "HouseGram Red",
    },
    features: {
      title: "Идеальный интерфейс",
      subtitle: "Почувствуйте плавность HouseGram Red. Создан для тех, кто требует скорости и стиля.",
      cta: "Открыть веб-версию",
      demo: {
        contactName: "Алиса",
        typing: "печатает...",
        placeholder: "Написать сообщение...",
        script: [
          "Привет! Зацени новый темный режим.",
          "Вау, эта черно-красная тема просто огонь! 🔴⚫️",
          "А скорость? Моментальная.",
          "Отправляю фото...",
          "Получила мгновенно. Это будущее.",
        ]
      },
    },
    footer: {
      copyright: "© 2026 HouseGram Inc. Все права защищены.",
      links: ["Конфиденциальность", "Условия", "Контакты", "Блог"],
    },
  },
};