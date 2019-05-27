export interface Page {
  '#'?: number;
  $key?: string;

  title: string;

  image?: string;
  contentSource?: string;
  content?: string;
  locale?: string;
  origin?: string;
  meta?: any;
}