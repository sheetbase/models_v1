import {
  Ids, Authors, Images, Content, Parents, Relationships, Taxonomies, Statistics, Extras,
} from './_shared';

export interface Audio
extends Ids, Authors, Images, Content, Parents, Relationships, Taxonomies, Statistics, Extras {
  // Ids

  title: string;
  src: string | {
    [type: string]: any; // { mp3: ..., webm: ..., ... }
  };

  createdAt?: string;
  // Authors
  // Images
  description?: string;
  // Content
  sheet?: string | {
    [type: string]: any; // { jpg: ..., pdf: ..., ... }
  };
  duration?: number;
  birthday?: number | string;
  locale?: string;
  origin?: string;
  type?: string;
  props?: {
    [prop: string]: any;
  };
  // Parents
  // Relationships
  keywords?: string;
  genres?: string | {
    [$key: string]: any;
  };
  // Taxonomies
  // Statistics
  // Extras
}
