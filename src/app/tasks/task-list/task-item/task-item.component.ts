import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../task.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() index: number;

  constructor(private taskSrv: TaskService) {}

  ngOnInit(): void {}

  toggleCompletion(task: Task) {
    task.completed = !task.completed;
  }

  onDelete() {
    this.taskSrv.delete(this.index);
  }
}
