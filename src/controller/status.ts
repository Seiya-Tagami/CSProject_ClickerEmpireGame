import { purchase } from '../model/purchase';
import { user } from '../model/user';
import {
  TStatusData,
  createCountingUpDays,
  createCountingUpYearsOld,
  createStatusView,
} from '../view/status';

export let clearAutoIncrementDaysId: number | undefined;
export const statusController = () => {
  const injectingData: TStatusData = {
    username: user.username,
    old: purchase.old,
    days: purchase.days,
    yen: purchase.yen,
  };

  createStatusView(injectingData);

  /**
   * calculating and injecting days and years old
   */
  clearAutoIncrementDaysId = setInterval(() => {
    purchase.incrementDays();
    createCountingUpDays(purchase.days);
    if (purchase.days % 365 == 0) {
      purchase.incrementOld();
      createCountingUpYearsOld(purchase.old);
    }
  }, 1000);
};

export const restartStatusController = (clearAutoIncrementDaysId: number | undefined) => {
  clearInterval(clearAutoIncrementDaysId);
  statusController();
};
