import { Ids, Authors, Images, Taxonomies, Statistics, Extras } from './_shared';

export interface Audio extends Ids, Authors, Images, Taxonomies, Statistics, Extras {
  // Ids

  title: string;
  src: string | {
    [type: string]: any; // { mp3: ..., webm: ..., ... }
  };

  createdAt?: string;
  // Authors
  // Images
  description?: string;
  content?: string;
  sheet?: string | {
    [type: string]: any; // { jpg: ..., pdf: ..., ... }
  };
  parents?: {
    [$key: string]: any;
  };
  duration?: number;
  birthday?: number | string;
  locale?: string;
  origin?: string;
  type?: string;
  props?: {
    [prop: string]: any;
  };
  relationships?: {
    [to: string]: any; // { "posts/post-1": ... }
  };
  keywords?: string;
  genres?: string | {
    [$key: string]: any;
  };
  // Taxonomies
  // Statistics
  // Extras
}
