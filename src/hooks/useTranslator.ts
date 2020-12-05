import Translator from '@/helpers/Translator'

export const useLocalizedText = (key: string, replacements: object = {}): string => {
  return Translator.text(key, replacements);
};

export const useLocalizedDate = (date: string): string => {
  return Translator.date(date);
}