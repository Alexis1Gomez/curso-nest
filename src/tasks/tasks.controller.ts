import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { query } from 'express';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService   : TasksService) {}
    
    @Get()
    getAllTasks(@Query() query: any) {
        console.log(query)
        return this.tasksService.getTasks();
    }
    
    @Get('/:id')
    getTask(@Param('id') id: string) {  // ✅ Recibe id como string
    return this.tasksService.getTask(parseInt(id));  // ✅ Convierte a número
}       

    @Post()
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTask(task);
    }

    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask()
    } 

    @Patch()
    updateTaskStatus() {
        return this.tasksService.updateTaskStatus();
    }
}