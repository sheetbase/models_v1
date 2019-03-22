import { UserProfile } from './user';

export interface Message extends UserProfile {
  '#'?: number;

  $key?: string;
  content: string;
  
  createdAt?: string;
  parentId?: string;

  // UserProfile
  // uid, displayName, email
}
