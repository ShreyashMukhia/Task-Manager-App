import { Component, EventEmitter, Input, Output } from '@angular/core' 
import { Task } from '../task.modal';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',  
  styleUrls: ['./edit-task.component.css']     
})

export class EditTaskComponent {
  @Input() task: Task = <Task>{}; 
  @Output() saveTask: EventEmitter<Task> = new EventEmitter();
  @Output() cancelEdit: EventEmitter<void> = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  save(): void {
    this.saveTask.emit(this.task);
    this.router.navigate(['tasks']); 
  }

  cancel(): void {
    this.cancelEdit.emit();
  }
}
