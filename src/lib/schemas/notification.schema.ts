import {Ids, Extras} from '../types';

export interface Notification extends Ids, Extras {
  // Ids
  thumbnail?: string;
  content?: string;
  link?: string;
  locale?: string;
  origin?: string;
  // Extras
}
