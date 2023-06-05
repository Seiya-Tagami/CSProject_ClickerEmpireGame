// -- This application's entry file.
import { loginController } from './controller';
import { purchase } from './model/purchase';
import { user } from './model/user';

const initApp = () => {
  user.initUsersLocalStorage();
  purchase.initGameDataLocalStorage();
  loginController();
};

initApp();
