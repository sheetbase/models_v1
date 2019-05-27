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
  viewCount?: number;
  likeCount?: number;
  commentCount?: number;
  contentSource?: string;
  content?: string;
  type?: string;
  parents?: {
    [$key: string]: any;
  };
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