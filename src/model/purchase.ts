export type option = {
  id: number
  nums: number
}

class Purchase {
  days: number;
  old: number;
  yen: number;
  burgers: number;
  oneClick: number;
  options: option[]


  //TODO: localStorageのあるなしで出しわけるようにする
  constructor() {
    this.days = 0
    this.old = 20
    this.yen = 50000
    this.burgers = 0
    this.oneClick = 25
    this.options = [
      {
        id: 1,
        nums: 0
      },
      {
        id: 2,
        nums: 0
      },
      {
        id: 3,
        nums: 0
      },
      {
        id: 4,
        nums: 0
      },
      {
        id: 5,
        nums: 0
      },
      {
        id: 6,
        nums: 0
      },
      {
        id: 7,
        nums: 0
      },
      {
        id: 8,
        nums: 0
      },
      {
        id: 9,
        nums: 0
      },
      {
        id: 10,
        nums: 0
      },
      {
        id: 11,
        nums: 0
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
}

export const purchase = new Purchase()