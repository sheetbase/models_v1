import { Ids } from './_shared';

export interface Tag extends Ids {
  // Ids

  title: string;
  count?: number;
}