import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Observable } from 'rxjs';
import { Task } from '../task.modal';
import { Router } from '@angular/router';

@Component({
  selector:'app-task-list',
  templateUrl:'./task-list.component.html',
  styleUrls:['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
tasks: Task[] = [];
@Output () editTask: EventEmitter<Task> = new EventEmitter();
newTask: Task = {
title: '',
description:'',
id:0,
completed: false,
};
constructor (private taskService: TaskServiceService, private router: Router) {}
ngOnInit(): void {
this.tasks = this.taskService.getTasks()
}
addTask(): void {
this.taskService.addTask(this.newTask);
this.tasks = this.taskService.getTasks ();
this.newTask = { id: 0, title:'' , description: '',completed: false };
}
markAsDone(task: Task): void {
task.completed = !task.completed;
this.taskService.updateTask(task);
}
deleteTask(task: Task): void {
if (confirm('Are you sure you want to delete this task?')) {
this.taskService.deleteTask(task.id);
this.tasks = this.taskService.getTasks ();
}
}
onEditTask(task: Task): void {
this.router.navigate(['tasks',
task.id,
'edit']);
}
}
