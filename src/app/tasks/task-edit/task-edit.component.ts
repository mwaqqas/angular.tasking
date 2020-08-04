import { Component, OnInit, Inject, Input } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  task: Task;
  isEditMode: boolean;
}

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
})
export class TaskEditComponent implements OnInit {
  taskStatuses = ['complete', 'incomplete'];
  taskStatus: string;
  task: Task;

  constructor(
    private taskSrv: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    if (this.data.isEditMode) {
      this.task = this.data.task;
    } else {
      this.task = {
        id: '',
        title: '',
        description: '',
        category: '',
        completed: false,
      };
    }
    this.taskStatus = this.task.completed === true ? 'complete' : 'incomplete';

    console.log(this.taskStatus);
  }

  onSubmit(value) {
    this.task.completed = this.taskStatus === 'complete' ? true : false;

    if (this.data.isEditMode) {
      this.task.title = value.title;
      this.task.description = value.description;
      this.taskSrv.update(this.task);
      console.log('task updated');
    } else {
      const newTask: Task = {
        id: '',
        title: value.title,
        description: value.description,
        category: value.category,
        completed: this.task.completed,
      };
      this.taskSrv.create(newTask);
      console.log('task added');
    }
  }
}
