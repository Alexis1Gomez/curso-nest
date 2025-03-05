import { Injectable, NotFoundException, HttpCode } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

 export interface User {
    name: string,
    age: number
}

@Injectable()
export class TasksService {

    private tasks = [  // ✅ Definimos un array con objetos
        { id: 0, name: "inicia tareas" }
    ];

    getTasks(){
        return this.tasks;
    }

    getTask(id: number) {
         const taskFound =  this.tasks.find(task => task.id === id)
         if (!taskFound) {
           return new  NotFoundException(`La tarea com este id ${id} no fue encontrado`)
         }
         return taskFound
    }

    createTask(task: CreateTaskDto) {
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
            name: task.title,
        });
        return task;
    }
    updateTask(task: UpdateTaskDto) {
        console.log(task)
        return 'actualizando tarea'
    }

    deleteTask() {
        return 'Eliminando tarea'
    }

    updateTaskStatus() {
        return 'actualizando el estado de una tarea'
    }

} 