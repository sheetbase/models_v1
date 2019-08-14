import {
  Ids, Authors, Images, Content, Parents, Relationships, Taxonomies, Statistics, Extras,
} from './_shared';

export interface Video
extends Ids, Authors, Images, Content, Parents, Relationships, Taxonomies, Statistics, Extras {
  // Ids
  title: string;
  type?: string;
  status?: string;
  createdAt?: string;
  // Authors
  // Images
  description?: string;
  // Content
  src: string | {
    [type: string]: any; // { mp4: ..., webm: ... }
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
  // Taxonomies
  // Statistics
  keywords?: string;
  // Extras
}
