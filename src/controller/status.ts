import { purchase } from '../model/purchase';
import { user } from '../model/user';
import {
  TStatusData,
  createCountingUpDays,
  createCountingUpYearsOld,
  createStatusView,
} from '../view/status';

export let clearAutoincreaseDaysId: number | undefined;
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
  clearAutoincreaseDaysId = setInterval(() => {
    purchase.increaseDays();
    createCountingUpDays(purchase.days);
    if (purchase.days % 365 == 0) {
      purchase.increaseOld();
      createCountingUpYearsOld(purchase.old);
    }
  }, 1000);
};

export const restartStatusController = (clearAutoincreaseDaysId: number | undefined) => {
  clearInterval(clearAutoincreaseDaysId);
  statusController();
};
