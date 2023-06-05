import { hamburgerController, optionsController, statusController, logoutController } from ".";
import { TUser, user } from "../model/user";
import { game_container, login_container } from "../view/common/containers";
import { createLoginView } from "../view/login"
import { removeCurrentView } from "../view/utils/removeView";

export const loginController = () => {
  createLoginView()

  const loginInput = <HTMLInputElement>document.getElementById("js-login-input")

  document.getElementById("js-new-button")?.addEventListener("click", () => {
    if (loginInput.value) {
      const savedUsers = JSON.parse(localStorage.getItem("users")!) as TUser[]
      if (savedUsers.find(user => user.username === loginInput.value)) {
        alert("this user already exist")
      } else {
        startGame(loginInput.value)
      }
    } else {
      alert("please type your name to play game")
    }
  })

  document.getElementById("js-login-button")?.addEventListener("click", () => {
    if (loginInput.value) {

      const savedUsers = JSON.parse(localStorage.getItem("users")!) as TUser[]
      if (savedUsers.find(user => user.username === loginInput.value)) {
        startGame(loginInput.value)
      } else {
        alert("no data found")
      }
    } else {
      alert("please type your name to play game")
    }
  })
}

const startGame = (loginUsername: string) => {
  user.setUsername(loginUsername)
  removeCurrentView(login_container, game_container)

  /**
   * initializing game controllers
   */
  statusController()
  optionsController()
  hamburgerController()
  logoutController()
}