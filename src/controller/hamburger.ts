import { user } from "../model/user"
import { createCountingUpBurgersViews, createHamburgerView } from "../view/hamburger"

export const hamburgerController = () => {
  const injectingData = {
    burgers: user.burgers,
  }

  createHamburgerView(injectingData)

  document.getElementById("js-hamburger-click")?.addEventListener("click", () => {
    user.clickBurger()
    createCountingUpBurgersViews(user.burgers)
  })
}