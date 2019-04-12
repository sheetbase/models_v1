import { UserProfile } from './user';

export interface Thread extends UserProfile {
  '#'?: number;
  $key?: string;

  content: string;

  createdAt?: string;
  parent?: string;
  master?: string;

  // UserProfile
  // uid
  // displayName
  // email

  meta?: any;
}
