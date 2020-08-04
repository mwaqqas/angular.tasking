import { Component, OnInit, Inject } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskEditComponent } from '../task-edit/task-edit.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Task,
    public dialog: MatDialog,
    private taskSrv: TaskService
  ) {}

  ngOnInit(): void {}

  onTaskStatusToggle(task: Task) {
    this.taskSrv.toggleTaskStatus(task);
  }

  onTaskDelete(task: Task): void {
    this.taskSrv.delete(task);
  }

  onTaskStatusEdit(task: Task): void {
    this.dialog.open(TaskEditComponent, {
      data: {
        task: task,
        isEditMode: true,
      },
    });
  }
}
