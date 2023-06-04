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
          total = 0 <= inputValue * price ? inputValue * price : 0
          createCountingTotalView(total)
        }
      })

      // when clicking go back
      document.getElementById(`js-go-back-${data.id}`)?.addEventListener("click", () => {
        createOptionsView(OPTIONS_DATA)
        optionsController() // like a recursive processing
      })

      // when clicking purchase
      document.getElementById(`js-purchase-${data.id}`)?.addEventListener("click", () => {
        if (total == 0) {
          alert("invalid number")
        }
        createOptionsView(OPTIONS_DATA)
        optionsController() // like a recursive processing
      })
    });
  })
};