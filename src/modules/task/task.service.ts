import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { handleError } from '../../utils/mongoExceptionHandel';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    try {
      const task = await this.taskModel.create(createTaskDto);
      return task;
    } catch (e) {
      handleError(e);
    }
  }

  findAll() {
    return this.taskModel.find();
  }

  async findOne(id: string) {
    if (isValidObjectId(id)) return await this.taskModel.findById(id);

    const task = await this.taskModel.findOne({
      title: id.toLowerCase().trim(),
    });

    if (!task) throw new NotFoundException(`Task not found`);

    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    try {
      const task = await this.taskModel.findByIdAndUpdate(id, updateTaskDto);
      return { ...task.toObject(), ...updateTaskDto };
    } catch (error) {
      handleError(error);
    }
  }

  async remove(id: string) {
    return await this.taskModel.findByIdAndDelete(id);
  }
}
