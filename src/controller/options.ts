import { purchase } from "../model/purchase";
import { OPTIONS_DATA } from "../view/constants";
import { createCountingTotalView, createDetailView } from "../view/detail";
import { createOptionsView } from "../view/options";

export type OptionsViewData = {
  id: number;
  label: string;
  desc: string;
  maxPurchases: number;
  price: number;
  img: string;
}[]

export type DetailViewData = {
  id: number
  label: string
  desc: string
  price: string
  maxPurchases: number
  img: string
}

export const optionsController = () => {
  createOptionsView(OPTIONS_DATA, purchase.options)

  OPTIONS_DATA.forEach((data, index) => {
    document.querySelector(`.js-button-${data.id}`)?.addEventListener("click", () => {
      const injectingData = OPTIONS_DATA.find((data) => data.id == index + 1) as unknown as DetailViewData
      createDetailView(injectingData);

      // counting total yen
      let total: number = 0;
      document.getElementById(`js-input-${data.id}`)?.addEventListener("change", (e: Event) => {
        const target = e.target as HTMLInputElement | null;
        if (target) {
          let inputValue = parseInt(target.value, 10);
          let price = parseInt(injectingData.price)
          total = inputValue * price
          createCountingTotalView(total)
        }
      })

      // when clicking go back
      document.getElementById(`js-go-back-${data.id}`)?.addEventListener("click", () => {
        optionsController() // like a recursive processing
      })

      // when clicking purchase
      document.getElementById(`js-purchase-${data.id}`)?.addEventListener("click", () => {
        // validation
        if (total == 0) {
          alert("invalid number")
        } else if (purchase.yen < total) {
          alert("You don't have enough money!")
        }

        optionsController() // like a recursive processing
      })
    });
  })
};