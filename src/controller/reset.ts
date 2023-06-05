import {
  clearAutoIncrementDaysId,
  clearAutoIncrementIntervalId,
  restartHamburgerController,
  restartOptionsController,
  restartStatusController,
} from '.'
import { purchase } from '../model/purchase'

export const resetController = () => {
  document.getElementById('js-reset-button')?.addEventListener('click', () => {
    if (window.confirm('Reset All Data?')) {
      purchase.resetItems()
    }

    restartStatusController(clearAutoIncrementDaysId)
    restartOptionsController(clearAutoIncrementIntervalId)
    restartHamburgerController()
  })
}
