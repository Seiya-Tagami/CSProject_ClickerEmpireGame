import { purchase } from '../model/purchase';
import { OPTIONS_DATA } from '../model/constants';
import { createCountingTotalView, createDetailView } from '../view/detail';
import { createCountingUpOneClickView } from '../view/hamburger';
import { createOptionsView } from '../view/options';
import { createCountingYenView } from '../view/status';

export type TOptionsViewData = {
  id: number;
  label: string;
  desc: string;
  maxPurchases: number;
  price: number;
  img: string;
}[];

export type TDetailViewData = {
  id: number;
  label: string;
  desc: string;
  price: string;
  maxPurchases: number;
  img: string;
};

export type TPurchaseModelData = {
  id: number;
  nums: number;
  price: number;
};

let startAutoIncrementYen = false;
export let clearAutoIncrementIntervalId: number | undefined;

export const optionsController = () => {
  createOptionsView(OPTIONS_DATA, purchase.options);

  /**
   * if startAutoIncrementYen is true, increase yen automatically
   */
  if (startAutoIncrementYen) {
    clearAutoIncrementIntervalId = setInterval(() => {
      purchase.incrementYenByAutoAddingValuePerSec();
      createCountingYenView(purchase.yen);
    }, 1000);
  }

  OPTIONS_DATA.forEach((data, index) => {
    document.querySelector(`.js-button-${data.id}`)?.addEventListener('click', () => {
      const injectingData = OPTIONS_DATA.find(
        (data) => data.id == index + 1,
      ) as unknown as TDetailViewData;
      createDetailView(injectingData, purchase.options[index].purchasedItemNums);

      /**
       * counting total yen
       */
      let total = 0;
      let inputValue = 0;
      let price = 0;
      document.getElementById(`js-input-${data.id}`)?.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLInputElement | null;
        if (target) {
          inputValue = parseInt(target.value, 10);
          price = parseInt(injectingData.price);
          total = inputValue * price;
          createCountingTotalView(total);
        }
      });

      /**
       * when clicking go back
       */
      document.getElementById(`js-go-back-${data.id}`)?.addEventListener('click', () => {
        restartOptionsController(clearAutoIncrementIntervalId);
      });

      /**
       * when clicking purchase
       */
      document.getElementById(`js-purchase-${data.id}`)?.addEventListener('click', () => {
        if (total == 0) {
          alert('invalid number');
          restartOptionsController(clearAutoIncrementIntervalId);
          return;
        } else if (purchase.yen < total) {
          alert("You don't have enough money!");
          restartOptionsController(clearAutoIncrementIntervalId);
          return;
        }

        const injectingData = {
          id: data.id,
          nums: inputValue,
          price: price,
        };

        purchase.purchaseItem(injectingData);

        if (0 < purchase.autoAddingValuePerSec) {
          startAutoIncrementYen = true;
        }

        createCountingYenView(purchase.yen);
        createCountingUpOneClickView(purchase.oneClick);

        restartOptionsController(clearAutoIncrementIntervalId);
      });
    });
  });
};

export const restartOptionsController = (clearAutoIncrementIntervalId: number | undefined) => {
  clearInterval(clearAutoIncrementIntervalId);
  optionsController();
};
