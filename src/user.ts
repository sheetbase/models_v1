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
  emailVerified?: string;
  lastLogin?: string;
  providerId?: string;
  settings?: UserProfileSettings;
}

export interface UserSecret {
  providerData?: string;
  password?: string;
  refreshToken?: string;
  tokenTimestamp?: string;
  oobCode?: string;
  oobMode?: string;
  oobTimestamp?: string;
}

export interface User extends UserInfo, UserSecret {
  '#'?: number;

  uid: string;
  $key?: string;

  // UserInfo

  // UserSecret
}
