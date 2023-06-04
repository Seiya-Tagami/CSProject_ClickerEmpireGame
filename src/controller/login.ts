import { hamburgerController, optionsController, statusController } from ".";
import { user } from "../model/user";
import { createLoginView, removeLoginView } from "../view/login"

export const loginController = () => {
  createLoginView()

  document.getElementById("js-new-button")?.addEventListener("click", () => {
    const newUserName = <HTMLInputElement>document.getElementById("js-login-input")
    user.username = newUserName.value;
    removeLoginView()

    /**
     * initializing game controllers
     */
    statusController()
    optionsController()
    hamburgerController()
  })
}