import { Ids, Extras } from './_shared';

export interface Message extends Ids, Extras {
  // Ids

  email: string;
  message: string;

  createdAt?: string;
  name?: string;
  tel?: string;
  // Extras
}