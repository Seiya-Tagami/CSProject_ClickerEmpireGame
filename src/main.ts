// -- This application's entry file.
import { loginController } from './controller'
import { user } from './model/user'

const initApp = () => {
  user.initUsersLocalStorage()
  loginController()
}

initApp()
