import * as bcrypt from 'bcrypt';
import { model } from 'mongoose';
import { UserSchema } from '../models/user';

export class LoginService {
    constructor() {}

    private readonly _User = model('User', UserSchema);

    login = async (email: string, password: string) => {
        const user = await this._User.findOne({ email });

        console.log(user);

        if (!user) {
            return {
                status: 404,
                body: 'E-mail not found.'
            };
        }

        if (!bcrypt.compareSync(password, user.toObject().password)) {
            return {
                status: 401,
                body: 'Invalid password.    '
            };
        }

        return {
            status: 200,
            body: user
        };
    };
}
