import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }

  @Get(':id')
  getById(
    @Param('id', ParseUUIDPipe)
    id: string,
  ) {
    return this.userService.findOneById(id);
  }

  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO) {
    return this.userService.createUser(createUserDTO);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() user: UpdateUserDTO,
  ) {
    return this.userService.createUser(user);
  }

  @Delete(':id')
  deleteById(
    @Param('id', ParseUUIDPipe)
    id: string,
  ) {
    return this.userService.delteUser(id);
  }
}
