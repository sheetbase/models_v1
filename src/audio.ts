import {
  Ids, Authors, Images, Content, Parents, Relationships, Taxonomies, Statistics, Extras,
} from './_shared';

export interface Audio
extends Ids, Authors, Images, Content, Parents, Relationships, Taxonomies, Statistics, Extras {
  // Ids
  title: string;
  type?: string;
  createdAt?: string;
  // Authors
  // Images
  description?: string;
  // Content
  src: string | {
    [type: string]: any; // { mp3: ..., webm: ... }
  };
  sheet?: string | {
    [type: string]: any; // { jpg: ..., pdf: ... }
  };
  duration?: number;
  birthday?: number | string;
  props?: {
    [prop: string]: any;
  };
  locale?: string;
  origin?: string;
  // Parents
  // Relationships
  genres?: string | {
    [$key: string]: any;
  };
  // Taxonomies
  // Statistics
  keywords?: string;
  // Extras
}
