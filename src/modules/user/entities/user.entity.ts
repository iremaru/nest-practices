import { v4 as uuid } from 'uuid';
import { CreateUserDTO } from '../dto/create-user.dto';
export class User {
  readonly userId: string;
  userName: string;

  constructor(user: CreateUserDTO) {
    this.userId = uuid();
    this.userName = user.userName;
  }
}
