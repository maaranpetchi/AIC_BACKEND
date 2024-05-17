import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy, VerifyCallback } from "passport-google-oauth20";


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            clientID: '17726045328-14pepg0lam054ob3sjh2imuvj2409t9u.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: "http://localhost:3000/api/auth/google/callback",
            scope: ['profile', 'email'],

        })
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        const { name, emails, photos } = profile
        const user = {
            fullname:name.givenName + " " +name.familyName,
            email: emails[0].value, 
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        }
        done(null, user)
    }
}