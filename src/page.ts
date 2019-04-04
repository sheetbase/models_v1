export interface Page {
  '#'?: number;
  $key?: string;

  title: string;

  image?: string;
  contentSource?: string;
  content?: string;
}