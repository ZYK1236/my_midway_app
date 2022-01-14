import { Inject, Controller, Provide, Body, Post } from '@midwayjs/decorator';
import { Context } from 'egg';
import { ILoginResponse } from '../interface';
import { LoginService } from '../service/login';

@Provide()
@Controller('/api') // 用于进行路由前缀（分组），这样这个控制器下面的所有路由都会带上这个前缀。
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  loginService: LoginService;

  @Post('/login')
  async Login(@Body() account: string, @Body() pwd: string): Promise<ILoginResponse> {
    const user = await this.loginService.getUser({ account, pwd });
    return { success: true, message: 'OK', data: user };
  }
}
