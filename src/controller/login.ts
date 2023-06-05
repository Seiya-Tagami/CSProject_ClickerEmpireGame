import { hamburgerController, optionsController, statusController } from ".";
import { user } from "../model/user";
import { game_container, login_container } from "../view/common/containers";
import { createLoginView } from "../view/login"
import { removeCurrentView } from "../view/utils/removeView";
import { logoutController } from "./logout";

export const loginController = () => {
  createLoginView()

  document.getElementById("js-new-button")?.addEventListener("click", () => {
    const newUserName = <HTMLInputElement>document.getElementById("js-login-input")

    if (newUserName.value) {
      user.setUsername(newUserName.value)
      removeCurrentView(login_container, game_container)

      /**
       * initializing game controllers
       */
      statusController()
      optionsController()
      hamburgerController()
      logoutController()
    } else {
      alert("please type your name to play game")
    }
  })
}