import Translator from '@/helpers/Translator'

export const useTranslate = (key: string): string => {
  return Translator.message(key);
}