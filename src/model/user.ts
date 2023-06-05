export type TUser = {
  id: number
  username: string
}

class User {
  username: string

  constructor(username: string) {
    this.username = username
  }

  setUsername(username: string) {
    this.username = username
  }

  initUsersLocalStorage() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]))
    }
  }

  setUserNameToLocalStorage() {
    const storedUsers = localStorage.getItem('users')
    const users = storedUsers ? (JSON.parse(storedUsers) as TUser[]) : []
    if (users.find((user) => user.username === this.username)) {
      alert('Saved your data. Please put the same name when you login.')
      return
    }
    users.push({ id: users.length, username: this.username })
    localStorage.setItem('users', JSON.stringify(users))
    alert('Saved your data. Please put the same name when you login.')
  }
}

export const user = new User('')
