import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
})
export class TaskEditComponent implements OnInit {
  title = new FormControl();
  constructor(private taskSrv: TaskService) {}

  ngOnInit(): void {}

  onAdd() {
    console.log('task added');
    this.taskSrv.create('test');
  }
}
