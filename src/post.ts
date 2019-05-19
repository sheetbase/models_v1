import { UserProfile } from './user';

export interface Post {
  '#'?: number;
  $key?: string;

  title: string;

  createdAt?: string;
  updatedAt?: string;
  author?: string | UserProfile;
  excerpt?: string;
  thumbnail?: string;
  image?: string;
  duration?: number;
  likeCount?: number;
  contentSource?: string;
  content?: string;
  type?: string;
  status?: 'draft' | 'published' | 'archived';
  keywords?: string;
  categories?: {
    [slug: string]: string;
  };
  tags?: string | {
    [slug: string]: string;
  };
  meta?: any;
}