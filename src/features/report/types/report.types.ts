export interface AnnualReport {
  id: string;
  year: string;
  title: string;
  summary: string;
  pdfUrl: string;
  imageUrl?: string;
  highlights?: string[];
  publishedDate: string;
}
