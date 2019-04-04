export interface Message {
  '#'?: number;
  $key?: string;

  email: string;
  message: string;

  createdAt?: string;
  name?: string;
  tel?: string;
}