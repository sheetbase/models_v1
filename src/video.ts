import { Ids, Authors, Images, Taxonomies, Statistics, Extras } from './_shared';

export interface Video extends Ids, Authors, Images, Taxonomies, Statistics, Extras {
  // Ids

  title: string;
  src: string | {
    [type: string]: any; // { mp4: ..., webm: ..., ... }
  };

  createdAt?: string;
  // Authors
  // Images
  description?: string;
  content?: string;
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
  // Taxonomies
  // Statistics
  // Extras
}
