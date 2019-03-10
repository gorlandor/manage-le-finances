import { ApplicationStates } from "./AppStatus.interface";

export interface IAuth {
  email: string;
  password?: string;  
  status: ApplicationStates
  uid?: string
}

export interface IAuthManager {
  setStatus: Function;
  handleInputChange: Function;
  handleLogin?: Function;
  handleRegister?: Function;
  status?: ApplicationStates;
}