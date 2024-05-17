import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {


    googleLogin(req){
        if(!req.user){
            return 'no user from google'
        }
        return{
            message :'user Info from google',
            user:req.user
        }
    }
}
