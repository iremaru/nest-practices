import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { User } from './entities/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private fakeData: User[] = [
    {
      userId: uuid(),
      userName: 'Idaira',
    },
    {
      userId: uuid(),
      userName: 'Inu',
    },
    {
      userId: uuid(),
      userName: 'Shiro',
    },
  ];

  findAll = () => [...this.fakeData];
  findOneById = (id: string) => {
    const result = this.fakeData.find((user) => user.userId === id);

    if (!result) throw new NotFoundException(`User with id '${id}' not found.`);

    return { ...result };
  };

  createUser = (user: CreateUserDTO) => {
    const newUser = new User(user);
    this.fakeData.push(newUser);
    console.log(newUser);
    return newUser;
  };

  updateUser = (id: string, userToUpdate: UpdateUserDTO) => {
    const targetUser = { ...this.findOneById(id), ...userToUpdate, id };
    this.fakeData.map((user) => {
      if (user.userId === id) return targetUser;
      return user;
    });
    return targetUser;
  };

  delteUser = (id: string) => {
    this.fakeData = this.fakeData.filter((user) => user.userId !== id);
  };
}
