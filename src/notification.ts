export interface Notification {
  '#'?: number;
  title: string;
  $key?: string;
  createdAt?: string;
  link?: string;
  thumbnail?: string;
  content?: string;
  // dynamic
  read?: boolean;
}