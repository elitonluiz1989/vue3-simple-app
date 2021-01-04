import about from '@/data/about.ts';

export const AboutService = {
  getInstitutionalContent() {
    return about.institutional;
  },

  getContacts() {
    return about.contacts;
  }
}