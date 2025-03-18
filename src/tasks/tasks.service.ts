import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  createTask(createTaskDto: CreateTaskDto): Task {
    const newTask: Task = { id: this.idCounter++, ...createTaskDto };
    this.tasks.push(newTask);
    return newTask;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) throw new NotFoundException(`Task with ID ${id} not found`);
    return task;
  }

  updateTask(id: number, updateDto: CreateTaskDto): Task {
    const taskIndex = this.tasks.findIndex((t) => t.id === id);
    if (taskIndex === -1) throw new NotFoundException(`Task with ID ${id} not found`);

    this.tasks[taskIndex] = { id, ...updateDto };
    return this.tasks[taskIndex];
  }

  deleteTask(id: number): void {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) throw new NotFoundException(`Task with ID ${id} not found`);
    this.tasks.splice(index, 1);
  }
}
