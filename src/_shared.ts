export interface Ids {
  '#'?: number;
  $key?: string;
}

export interface Authors {
  // John Doe
  // { author-1: ..., author-2: ... }
  authors?: string | {
    [$key: string]: any;
  };
}

export interface Images {
  thumbnail?: string;
  image?: string;
}

export interface Content {
  contentSource?: string;
  content?: string;
}

export interface Parents {
  parents?: {
    [$key: string]: any;
  };
}

export interface Relationships {
  // { "posts:post-1": ... }
  relationships?: {
    [to: string]: any;
  };
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

export interface Rating {
  rating?: {
    count: number; // number of rating
    total: number; // number of stars
  };
}

export interface Statistics {
  viewCount?: number;
  likeCount?: number;
  commentCount?: number;
}

export interface Extras {
  meta?: any;
}
