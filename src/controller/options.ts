import { OPTIONS_DATA } from "../model/constants";
import { createDetailView } from "../view/detail";
import { createOptionsView } from "../view/options";

export type DetailViewData = {
  id: number
  label: string
  desc: string
  price: string
  maxPurchase: number
  img: string
}

export const optionsController = () => {
  OPTIONS_DATA.forEach((data, index) => {
    document.querySelector(`.js-button-${data.id}`)?.addEventListener("click", () => {
      const injectingData = OPTIONS_DATA.find((data) => data.id == index + 1) as unknown as DetailViewData
      createDetailView(injectingData);

      // when clicking go back
      document.getElementById(`js-go-back-${data.id}`)?.addEventListener("click", () => {
        createOptionsView()
        optionsController() // like recursive processing
      })

      // when clicking purchase
      document.getElementById(`js-purchase-${data.id}`)?.addEventListener("click", () => {
        createOptionsView()
        optionsController() // like recursive processing
      })
    });
  })
};