import { UserController } from '../controllers/UserController';
import { LoginController } from '../controllers/LoginController';

export class Routes {
    public UserController: UserController = new UserController();
    private LoginController: LoginController = new LoginController();
    public routes(app): void {

        app.route('/login').post(this.LoginController.login.bind(this.LoginController));

        app.route('/user')
            .post(this.UserController.registerUser)
            .get(this.UserController.getUsers);
    }
}
