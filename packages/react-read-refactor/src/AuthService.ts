export type User = {
  username: string;
  name: string;
};

export class AuthService {
  private user: User | null;

  constructor() {
    this.user = null;
  }

  getUser() {
    return this.user;
  }

  login(user: User) {
    this.user = user;
  }

  logout() {
    this.user = null;
  }
}
