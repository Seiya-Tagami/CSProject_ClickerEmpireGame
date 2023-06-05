import { user } from "../model/user"

export const logoutController = () => {
  document.getElementById("js-save-data")?.addEventListener("click", () => {
    user.setUserNameToLocalStorage()
    location.reload()
  })
}