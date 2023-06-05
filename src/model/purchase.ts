import { TPurchaseModelData } from '../controller/options';

export type TOption = {
  id: number;
  processingValue: number;
  purchasedItemNums: number;
};

export type TGameData = {
  id: number;
  days: number;
  old: number;
  yen: number;
  burgers: number;
  oneClick: number;
  autoAddingValuePerSec: number;
  options: TOption[];
};

const initOptionsData = [
  {
    id: 1,
    processingValue: 25,
    purchasedItemNums: 0,
  },
  {
    id: 2,
    processingValue: 0.1,
    purchasedItemNums: 0,
  },
  {
    id: 3,
    processingValue: 0.07,
    purchasedItemNums: 0,
  },
  {
    id: 4,
    processingValue: 30,
    purchasedItemNums: 0,
  },
  {
    id: 5,
    processingValue: 120,
    purchasedItemNums: 0,
  },
  {
    id: 6,
    processingValue: 32000,
    purchasedItemNums: 0,
  },
  {
    id: 7,
    processingValue: 64000,
    purchasedItemNums: 0,
  },
  {
    id: 8,
    processingValue: 500000,
    purchasedItemNums: 0,
  },
  {
    id: 9,
    processingValue: 2200000,
    purchasedItemNums: 0,
  },
  {
    id: 10,
    processingValue: 25000000,
    purchasedItemNums: 0,
  },
  {
    id: 11,
    processingValue: 30000000000,
    purchasedItemNums: 0,
  },
];

class Purchase {
  gameDataId: number | null;
  days: number;
  old: number;
  yen: number;
  burgers: number;
  oneClick: number;
  autoAddingValuePerSec: number;
  options: TOption[];

  //TODO: localStorageのあるなしで出しわけるようにする
  constructor() {
    this.gameDataId = null;
    this.days = 0;
    this.old = 20;
    this.yen = 1000000;
    this.burgers = 0;
    this.oneClick = 25;
    this.autoAddingValuePerSec = 0;
    this.options = initOptionsData;
  }

  clickBurger() {
    this.burgers++;
    this.yen += this.oneClick;
  }

  incrementOld() {
    this.old++;
  }

  incrementDays() {
    this.days++;
  }

  incrementYenByAutoAddingValuePerSec() {
    this.yen += this.autoAddingValuePerSec;
  }

  purchaseItem(data: TPurchaseModelData) {
    this.yen -= data.price * data.nums;
    const foundOption = this.options.find((option) => option.id == data.id);

    // for flip machine
    if (foundOption !== undefined) {
      if (data.id == 1) {
        this.oneClick += foundOption.processingValue * data.nums;
      } else {
        this.autoAddingValuePerSec += foundOption.processingValue * data.nums;
      }

      foundOption.purchasedItemNums += data.nums;
    }
  }

  getGameDataFromLocalStorage(userId: number) {
    const storedGameData = localStorage.getItem('gameData');
    const gameData = storedGameData ? (JSON.parse(storedGameData) as TGameData[]) : [];
    const userGameData = gameData.find((data) => data.id == userId);
    if (userGameData) {
      this.gameDataId = userGameData.id;
      this.days = userGameData.days;
      this.old = userGameData.old;
      this.yen = userGameData.yen;
      this.burgers = userGameData.burgers;
      this.oneClick = userGameData.oneClick;
      this.autoAddingValuePerSec = userGameData.autoAddingValuePerSec;
      this.options = userGameData.options;
    }
  }

  resetData() {
    this.days = 0;
    this.old = 20;
    this.yen = 1000000;
    this.burgers = 0;
    this.oneClick = 25;
    this.autoAddingValuePerSec = 0;
    this.options = initOptionsData;
  }

  initGameDataLocalStorage() {
    if (!localStorage.getItem('gameData')) {
      localStorage.setItem('gameData', JSON.stringify([]));
    }
  }

  saveDataToLocalStorage() {
    const storedGameData = localStorage.getItem('gameData');
    const gameData = storedGameData ? (JSON.parse(storedGameData) as TGameData[]) : [];
    const storedGameDatum = gameData.find((data) => data.id == this.gameDataId);
    if (storedGameData && storedGameDatum !== undefined) {
      const savingGameData = gameData.filter((d) => d.id !== storedGameDatum.id);
      const newGameDatum = {
        id: this.gameDataId as number,
        days: this.days,
        old: this.old,
        yen: this.yen,
        burgers: this.burgers,
        oneClick: this.oneClick,
        autoAddingValuePerSec: this.autoAddingValuePerSec,
        options: this.options,
      };
      savingGameData.push(newGameDatum);
      localStorage.setItem('gameData', JSON.stringify(savingGameData.sort((a, b) => a.id - b.id)));
      return true;
    }

    const mewGameDatum = {
      id: gameData?.length,
      days: this.days,
      old: this.old,
      yen: this.yen,
      burgers: this.burgers,
      oneClick: this.oneClick,
      autoAddingValuePerSec: this.autoAddingValuePerSec,
      options: this.options,
    };
    gameData.push(mewGameDatum);
    localStorage.setItem('gameData', JSON.stringify(gameData));
    return true;
  }
}

export const purchase = new Purchase();
