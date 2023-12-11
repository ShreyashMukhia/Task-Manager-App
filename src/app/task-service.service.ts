import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../app/task.modal';
@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  static counter = 1000;
  private tasks: Task[] = [
    {
      id: this.generateId(),
      title: 'Task 1',
      description: 'This is task 1',
      completed: false,
    },
    {
      id: this.generateId(),
      title: 'Task 2',
      description: 'This is task 2',
      completed: false,
    },
    {
      id: this.generateId(),
      title: 'Task 3',
      description: 'This is task 3',
      completed: false,
    },
    {
      id: this.generateId(),
      title: 'Task 4',
      description: 'This is task 4',
      completed: false,
    },
    {
      id: this.generateId(),
      title: 'Task 5',
      description: 'This is task 5',
      completed: false,
    },
    {
      id: this.generateId(),
      title: 'Task 6',
      description: 'This is task 6',
      completed: false,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }
  getTask(id: number): Task | undefined {
    return this.tasks.find((t) => t.id === id);
  }
  addTask(task: Task): void {
    const newTask: Task = {
      id: this.generateId(),
      title: task.title,
      description: task.description,
      completed: task.completed,
    };
    this.tasks.push(newTask);
  }
  updateTask(task: Task): void {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks[index] = task;
  }
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
  private generateId(): number {
    return ++TaskServiceService.counter;
  }
}
