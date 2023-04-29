import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

export class InMemoryRepository implements IUsersRepository {
  private users: User[] = [];
  async findByemail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
