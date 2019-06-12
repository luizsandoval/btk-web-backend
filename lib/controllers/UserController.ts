import { model } from 'mongoose';
import { Request, Response } from 'express';
import { hashSync } from 'bcrypt';

import { UserSchema } from '../models/user';

const User = model('User', UserSchema);

export class UserController {
    public registerUser(req: Request, res: Response) {
        req.body.password = hashSync(req.body.password, 10);
        let newUser = new User(req.body);


        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }

            res.json(user);
        }); 
    }

    public getUsers (req: Request, res: Response) {
        User.find({}, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user)
        })
    }
}
