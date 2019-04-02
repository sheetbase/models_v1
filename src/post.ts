import { UserProfile } from './user';

export interface Post {
  '#'?: number;

  title: string;
  $key?: string;

  createdAt?: string;
  updatedAt?: string;
  author?: UserProfile;
  excerpt?: string;
  thumbnail?: string;
  image?: string;
  duration?: number;
  likeCount?: number;
  contentSource?: string;
  content?: string;
  type?: string;
  status?: 'draft' | 'published' | 'archived';
  categories?: {
    [slug: string]: string;
  };
  tags?: {
    [slug: string]: string;
  };
  keywords?: string;
}