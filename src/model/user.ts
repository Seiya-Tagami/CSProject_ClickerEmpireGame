class User {
  username: string;
  days: number;
  old: number;
  yen: number;
  burgers: number;
  oneClick: number

  constructor(username: string) {
    this.username = username
    this.days = 0
    this.old = 20
    this.yen = 50000
    this.burgers = 0
    this.oneClick = 25
  }

  clickBurger() {
    this.burgers++
    this.yen += this.oneClick
  }

  autoIncrementDays() {
    setInterval(() => {
      this.days++
      console.log(this.days)
    }, 1000)
  }
}

export const user = new User("Shiba")