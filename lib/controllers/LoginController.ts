import * as mongoose from 'mongoose';
import { UserSchema } from '../models/user';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class LoginController {
    public login(req: Request, res: Response) {
        User.find(
            { username: req.params.username, password: req.params.password },
            (err, user) => {
                if(err) {
                    res.send(err);
                }

                res.json(user);
            }
        );
    }
}
