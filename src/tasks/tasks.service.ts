import { Injectable } from "@nestjs/common";

 export interface User {
    name: string,
    age: number
}

@Injectable()
export class TasksService {

    private tasks = [0];

    getTasks(){
        return this.tasks;
    }

    createTask(task:any) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return task;
    }
    updateTask() {
        return 'actualizando tarea'
    }

    deleteTask() {
        return 'Eliminando tarea'
    }

    updateTaskStatus() {
        return 'actualizando el estado de una tarea'
    }

}