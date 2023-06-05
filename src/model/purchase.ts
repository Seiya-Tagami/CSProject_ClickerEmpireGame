import { TPurchaseModelData } from "../controller/options";

export type TOption = {
  id: number
  processingValue: number
  purchasedItemNums: number
}

class Purchase {
  days: number;
  old: number;
  yen: number;
  burgers: number;
  oneClick: number;
  autoAddingValuePerSec: number;
  options: TOption[];


  //TODO: localStorageのあるなしで出しわけるようにする
  constructor() {
    this.days = 0
    this.old = 20
    this.yen = 1000000
    this.burgers = 0
    this.oneClick = 25
    this.autoAddingValuePerSec = 0
    this.options = [
      {
        id: 1,
        processingValue: 25,
        purchasedItemNums: 0
      },
      {
        id: 2,
        processingValue: 0.1,
        purchasedItemNums: 0
      },
      {
        id: 3,
        processingValue: 0.07,
        purchasedItemNums: 0
      },
      {
        id: 4,
        processingValue: 30,
        purchasedItemNums: 0
      },
      {
        id: 5,
        processingValue: 120,
        purchasedItemNums: 0
      },
      {
        id: 6,
        processingValue: 32000,
        purchasedItemNums: 0
      },
      {
        id: 7,
        processingValue: 64000,
        purchasedItemNums: 0
      },
      {
        id: 8,
        processingValue: 500000,
        purchasedItemNums: 0
      },
      {
        id: 9,
        processingValue: 2200000,
        purchasedItemNums: 0
      },
      {
        id: 10,
        processingValue: 25000000,
        purchasedItemNums: 0
      },
      {
        id: 11,
        processingValue: 30000000000,
        purchasedItemNums: 0
      },
    ]
  }

  clickBurger() {
    this.burgers++
    this.yen += this.oneClick
  }

  incrementOld() {
    this.old++
  }

  incrementDays() {
    this.days++
  }

  incrementYenByAutoAddingValuePerSec() {
    this.yen += this.autoAddingValuePerSec
  }


  purchaseItem(data: TPurchaseModelData) {
    // calculating yen
    this.yen -= data.price * data.nums

    // for flip machine
    if (data.id == 1) {
      this.oneClick += this.options.find((option) => option.id == data.id)!.processingValue * data.nums;
    } else {
      this.autoAddingValuePerSec += this.options.find((option) => option.id == data.id)!.processingValue * data.nums;
      console.log(this.autoAddingValuePerSec)
    }

    this.options.find((option) => option.id == data.id)!.purchasedItemNums += data.nums
  }
}

export const purchase = new Purchase()