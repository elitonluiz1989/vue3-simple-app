import InstitutionalWritten from './InstitutionalWritten';

export default interface Institutional {
  title: string;
  author: string;
  createdAt: string;
  content: string;
  written?: InstitutionalWritten
}