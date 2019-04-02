import { Post } from './post';

export interface ProductVariation {
  title?: string;
  items: {
    [$key: string]: ProductVariationItem;
  };
}

export interface ProductVariationItem {
  title: string;
  price?: number; // use this price
  modifier?: number; // original price + this
  description?: string;
  content?: string;
}

export interface ProductRating {
  count: number;
  total: number;
}

export interface ProductShipping {
  price?: number;
  weight?: number | string; // number = kg; 10lb
  dimensions?: string;
  class?: string;
}

export interface Product {
  '#'?: number;

  title: string;
  $key?: string;
  sku: string;
  unit: string;
  price: number;

  createdAt?: string;
  description?: string;
  discounted?: number;
  thumbnail?: string;
  image?: string;
  slideshow?: Post[];
  contentSource?: string;
  content?: string;
  brand?: string;
  birthday?: string;
  country?: string;
  upc?: number | string;
  variations?: {
    [name: string]: ProductVariation;
  };
  likeCount?: number;
  rating?: ProductRating;
  shipping?: ProductShipping;
  status?: 'instock' | 'outstock' | 'archived';
  categories?: {
    [slug: string]: string;
  };
  tags?: {
    [slug: string]: string;
  };
  keywords?: string;
}