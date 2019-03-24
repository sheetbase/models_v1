export type UserProviderId = 'password' | 'custom' | 'anonymous' | 'google.com' | 'facebook.com';
export type UserOobMode = 'resetPassword' | 'verifyEmail' | 'none';

export interface UserProfileSettings {
  // prefix by $ means public
  $email?: boolean;
  $phoneNumber?: boolean;
  $address?: boolean;
  // for additionalData
  [key: string]: any;
}

export interface UserEditableProfile {
  displayName?: string;
  photoURL?: string;
  bio?: string;
  url?: string;
  address?: string;
  additionalData?: any;
}

export interface UserProfile extends UserEditableProfile {

  // UserEditableProfile

  uid?: string;
  createdAt?: string;
  email?: string;
  phoneNumber?: string;
  claims?: {
    [key: string]: any;
  };
}

export interface UserInfo extends UserProfile {

  // UserProfile

  username?: string;
  emailVerified?: boolean;
  lastLogin?: string;
  providerId?: UserProviderId;
  settings?: UserProfileSettings;

  // dynamic
  isNewUser?: boolean;
  isAnonymous?: boolean;
}

export interface UserSecret {
  password?: string;
  refreshToken?: string;
  tokenTimestamp?: number;
  oobCode?: string;
  oobMode?: UserOobMode;
  oobTimestamp?: number;
}

export interface User extends UserInfo, UserSecret {
  '#'?: number;

  uid: string;
  $key?: string;

  // UserInfo

  // UserSecret
}
