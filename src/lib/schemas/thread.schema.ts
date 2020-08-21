import {Ids, Status, Rating, Sharing, Statistics, Extras} from './_shared';

export interface ThreadAttachment {
  // link attachment
  link?: string;
  // file attachment
  id?: string; // Drive file id or undefined for Gmail attachments
  name?: string;
  mimeType?: string;
  size?: number;
}

export interface GroupingThread {
  parent: Thread;
  children: Thread[];
}

export interface Thread
  extends Ids,
    Status,
    Rating,
    Sharing,
    Statistics,
    Extras {
  // Ids
  type?: string;
  // Status
  createdAt?: string;
  content: string;
  attachments?: {
    [index: string]: ThreadAttachment;
  };
  parent?: string;
  master?: string; // <sheet>/<key> (posts/post-1)
  stars?: number; // with rating stars
  uid?: string;
  email?: string;
  displayName?: string;
  phoneNumber?: number | string;
  // Rating
  // Sharing
  // Statistics
  // Extras
}

export type ParentThread = Omit<Thread, 'parent'>;
export type ThreadX = ParentThread;

export type ChildThread = Thread;
export type MessageX = ChildThread;
export type Message = ChildThread;
