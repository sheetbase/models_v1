export type UserProviderId = 'password' | 'custom' | 'anonymous' | 'google.com' | 'facebook.com';
export type UserOobMode = 'resetPassword' | 'verifyEmail' | 'none';

export interface UserProfileSettings {
  // prefix by $ means public
  $email?: boolean;
  $phoneNumber?: boolean;
  $addresses?: boolean;
  $type?: boolean;
  $status?: boolean;
  // for additionalData
  [key: string]: any;
}

export interface User extends UserInfo, UserSecret {
  '#'?: number;
  // UserInfo
  // UserSecret
}

export interface UserInfo extends UserProfile {
  username?: string;
  emailVerified?: boolean;
  lastLogin?: string;
  providerId?: UserProviderId;
  settings?: UserProfileSettings;
  // dynamic
  isNewUser?: boolean;
  isAnonymous?: boolean;
  // UserProfile
}

export interface UserProfile extends UserEditableProfile {
  uid?: string;
  type?: string;
  status?: string;
  createdAt?: string;
  email?: string;
  phoneNumber?: number | string;
  claims?: {
    [key: string]: any;
  };
  // UserEditableProfile
}

export interface UserEditableProfile {
  displayName?: string;
  photoURL?: string;
  bio?: string;
  url?: string;
  addresses?: string | {
    [name: string]: any;
  };
  additionalData?: any;
}

export interface UserSecret {
  password?: string;
  refreshToken?: string;
  tokenTimestamp?: number;
  oobCode?: string;
  oobMode?: UserOobMode;
  oobTimestamp?: number;
}
