import { purchase } from '../model/purchase'
import { createCountingUpBurgersView, createHamburgerView } from '../view/hamburger'
import { createCountingYenView } from '../view/status'

export const hamburgerController = () => {
  const injectingData = {
    burgers: purchase.burgers,
  }

  createHamburgerView(injectingData)

  document.getElementById('js-hamburger-click')?.addEventListener('click', () => {
    purchase.clickBurger()
    createCountingUpBurgersView(purchase.burgers)
    createCountingYenView(purchase.yen)
  })
}
