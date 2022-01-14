import { Inject, Controller, Provide, Body, Post, Get, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { ILoginResponse, IGetUserResponse } from '../interface';
import { LoginService } from '../service/login';
import { UserService } from "../service/user"

@Provide()
@Controller('/api') // 用于进行路由前缀（分组），这样这个控制器下面的所有路由都会带上这个前缀。
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  loginService: LoginService;
  userService: UserService;

  @Post('/login')
  async Login(@Body() account: string, @Body() pwd: string): Promise<ILoginResponse> {
    const user = await this.loginService.getUser({ account, pwd });
    return { success: true, message: 'OK', data: user };
  }

  @Get('/get_user')
  async GetUser(@Query() uid: string): Promise<IGetUserResponse> {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user }
  }
}
