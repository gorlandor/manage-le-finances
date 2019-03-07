export interface IAuth {
  email: string;
  password: string;
  signedIn?: boolean;
  registered?: boolean;
  loading: boolean;
  uid?: string
}

export interface IAuthManager {
  handleEmailChange: Function;
  handlePasswordChange: Function;
  handleLogin?: Function;
  handleRegister?: Function;
  loading?: boolean;
}