import {Body, Controller, Delete, Get, Patch, Post, Put, Query } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { query } from 'express';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService   : TasksService) {}
    
    @Get()
    getAllTasks(@Query() query: any) {
        console.log(query)
        return this.tasksService.getTasks();
    }     

    @Post()
    createTask(@Body() task:any) {
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask() {
        return this.tasksService.updateTask();
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