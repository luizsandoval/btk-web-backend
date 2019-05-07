import { Request, Response } from 'express';
import { UserController } from '../controllers/UserController';

export class Routes {
    public UserController: UserController = new UserController();
    public routes(app): void {
        app.route('/login').post((req: Request, res: Response) => {
            res.status(200).send({
                message: 'LOGIN IS WORKING BITCH!'
            });
        });

        app.route('/user')
            .post(this.UserController.registerUser)
            .get(this.UserController.getUsers);
    }
}
