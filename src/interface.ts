/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: string;
}

export interface IGetUserResponse {
  success: boolean;
  message: string;
  data: IUserOptions;
}

export interface ILoginOptions {
  account: string;
  pwd: string;
}

export interface ILoginResponse {
  success: boolean;
  message: string;
  data: {
    account: string;
    pwd: string;
  }
}
