import { purchase } from "../model/purchase";
import { user } from "../model/user";
import { StatusData, createCountingUpDays, createCountingUpYearsOld, createStatusView } from "../view/status";


export const statusController = () => {
  const InitInjectingData: StatusData = {
    username: user.username,
    old: purchase.old,
    days: purchase.days,
    yen: purchase.yen
  }

  createStatusView(InitInjectingData)

  /**
   * calculating and injecting days and years old
   */
  setInterval(() => {
    purchase.incrementDays()
    createCountingUpDays(purchase.days)
    if (purchase.days % 365 == 0) {
      purchase.incrementOld()
      createCountingUpYearsOld(purchase.old)
    }
  }, 1000)
}