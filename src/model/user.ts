export type TUser = {
  id: number;
  username: string;
};

class User {
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  setUsername(username: string) {
    this.username = username;
  }

  initUsersLocalStorage() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]));
    }
  }

  saveUserNameToLocalStorage() {
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? (JSON.parse(storedUsers) as TUser[]) : [];
    if (users.find((user) => user.username === this.username)) {
      return true;
    }
    users.push({ id: users.length, username: this.username });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
}

export const user = new User('');
