import { Document } from 'mongoose';
import { CreateTaskDto } from '../dto/create-task.dto';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  title: string;

  @Prop({
    index: true,
  })
  description: string;

  @Prop({
    index: true,
  })
  cost: number;

  creationDate: number;

  updateDate?: number;

  constructor({ title, description, cost }: CreateTaskDto) {
    super();
    this.title = title.toLowerCase();
    this.description = description.toLowerCase();
    this.cost = cost;
    this.creationDate = Date.now();
    this.updateDate = Date.now();
  }
}

export const TaskSchema = SchemaFactory.createForClass(Task);
