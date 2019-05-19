import { UserProfile } from './user';

export interface Thread extends UserProfile {
  '#'?: number;
  $key?: string;

  content: string;

  createdAt?: string;
  parent?: string;
  master?: string;

  uid?: string;
  email?: string;
  displayName?: string;

  meta?: any;
}
