import { UserProfile } from './user';

export interface Ids {
  '#'?: number;
  $key?: string;
}

export interface Authors {
  // John Doe
  // { uid: 'xxx', ... }
  // { author-1: { ... }, author-2: { ... } }
  authors?: string | UserProfile | {
    [$key: string]: any;
  };
}

export interface Images {
  thumbnail?: string;
  image?: string;
}

export interface Statistics {
  viewCount?: number;
  likeCount?: number;
  commentCount?: number;
}

export interface Taxonomies {
  // Cat 1, Cat 2
  // { cat-1: ..., cat-2: ... }
  categories?: string | {
    [$key: string]: any;
  };
  // Tag 1, Tag 2
  // { tag-1: ..., tag-2: ... }
  tags?: string | {
    [$key: string]: any;
  };
}

export interface Extras {
  meta?: any;
}
