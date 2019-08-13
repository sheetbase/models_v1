import {
  Ids, Authors, Images, Content, Parents, Relationships, Taxonomies, Statistics, Extras,
} from './_shared';

export interface Video
extends Ids, Authors, Images, Content, Parents, Relationships, Taxonomies, Statistics, Extras {
  // Ids

  title: string;
  src: string | {
    [type: string]: any; // { mp4: ..., webm: ..., ... }
  };

  createdAt?: string;
  // Authors
  // Images
  description?: string;
  // Content
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
  // Taxonomies
  // Statistics
  // Extras
}
