import { user } from "../model/user"
import { createCountingUpBurgersView, createHamburgerView } from "../view/hamburger"
import { createCountingUpYenView } from "../view/status"

export const hamburgerController = () => {
  const injectingData = {
    burgers: user.burgers,
  }

  createHamburgerView(injectingData)

  document.getElementById("js-hamburger-click")?.addEventListener("click", () => {
    user.clickBurger()
    createCountingUpBurgersView(user.burgers)
    createCountingUpYenView(user.yen)
  })
}