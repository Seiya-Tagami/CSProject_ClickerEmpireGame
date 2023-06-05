import { user } from '../model/user'

export const logoutController = () => {
  document.getElementById('js-save-button')?.addEventListener('click', () => {
    user.setUserNameToLocalStorage()
    location.reload()
  })
}
