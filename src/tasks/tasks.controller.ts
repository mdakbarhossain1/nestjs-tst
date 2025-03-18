import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({ status: 201, description: 'Task created successfully' })
  create(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  getAll(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get task by ID' })
  getOne(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a task' })
  update(@Param('id') id: string, @Body() updateDto: CreateTaskDto): Task {
    return this.tasksService.updateTask(Number(id), updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task' })
  delete(@Param('id') id: string): void {
    return this.tasksService.deleteTask(Number(id));
  }
}
