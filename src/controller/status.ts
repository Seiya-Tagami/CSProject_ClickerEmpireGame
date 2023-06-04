import { purchase } from "../model/purchase";
import { createCountingUpDays, createCountingUpYearsOld } from "../view/status";

export const statusController = () => {

  // days and years old processing
  setInterval(() => {
    purchase.incrementDays()
    createCountingUpDays(purchase.days)
    if (purchase.days % 365 == 0) {
      purchase.incrementOld()
      createCountingUpYearsOld(purchase.old)
    }
  }, 1000)
}