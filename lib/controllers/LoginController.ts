import { Request, Response } from 'express';

import { LoginService } from '../services/login.service';
export class LoginController {
    private readonly _loginService = new LoginService();
    public login(req: Request, res: Response) {
        this._loginService
            .login(req.body.email, req.body.password)
            .then(r => {
                res.status(r.status).json(r.body);
            })
            .catch(err => res.send(err));
    }
}
