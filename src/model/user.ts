class User {
  username: string;

  constructor(username: string) {
    this.username = username
  }

  initUser(username: string) {
    this.username = username
  }
}

export const user = new User("")