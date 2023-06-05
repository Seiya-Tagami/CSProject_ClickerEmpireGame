class User {
  username: string;

  constructor(username: string) {
    this.username = username
  }

  setUsername(username: string) {
    this.username = username
  }

  setUserNameToLocalStorage() {
    localStorage.setItem("username", this.username)
    alert("Saved your data. Please put the same name when you login.")
  }
}

export const user = new User("")