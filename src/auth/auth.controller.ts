import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guard';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
    @Get('google/login')
    @UseGuards(AuthGuard('google'))
    handleLogin() {
        return { msg: 'Google Authentication login' }
    }
    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    handleRedirect(@Req() req){
        return this.authService.googleLogin(req)
    }


    @Get('normal')
    sampleaMessage(){
        return {msg:'hello this is a normal message'}
    }


}
