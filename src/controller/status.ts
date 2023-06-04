import { user } from "../model/user";
import { createCountingUpDays, createCountingUpYearsOld } from "../view/status";

export const statusController = () => {

  // days and years old processing
  setInterval(() => {
    user.incrementDays()
    createCountingUpDays(user.days)
    if (user.days % 365 == 0) {
      user.incrementOld()
      console.log(user.old)
      createCountingUpYearsOld(user.old)
    }
  }, 1000)
}