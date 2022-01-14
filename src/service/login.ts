import { Provide } from '@midwayjs/decorator';
import { ILoginOptions } from '../interface';

@Provide()
export class LoginService {
  async getUser(options: ILoginOptions) {
    return {
      account: options.account,
      pwd: options.pwd
    };
  }
}
