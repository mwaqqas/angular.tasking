import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

import { Task } from './task-item/task.model';

const sourceTaskList: Task[] = [
  {
    id: '1',
    title: 'Learn Angular',
    dueBy: '2020-08-04',
    createdAt: '2020-07-30',
    completed: false,
    category: 'green',
  },
  {
    id: '1',
    title: 'Write Frontend Code',
    dueBy: '2020-08-04',
    createdAt: '2020-07-30',
    completed: false,
    category: 'green',
  },
  {
    id: '1',
    title: 'Write Backend Code',
    dueBy: '2020-08-04',
    createdAt: '2020-07-30',
    completed: false,
    category: 'green',
  },
  {
    id: '1',
    title: 'App deployment',
    dueBy: '2020-08-04',
    createdAt: '2020-07-30',
    completed: false,
    category: 'green',
  },
];

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit, OnDestroy {
  mediaSub: Subscription;
  isDeviceXs: boolean;
  taskList: Task[];

  constructor(private mediaObserver: MediaObserver) {
    this.taskList = sourceTaskList;
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.isDeviceXs = result.mqAlias === 'xs' ? true : false;
        console.log(result.mqAlias);
        console.log('isDeviceXs?: ' + this.isDeviceXs);
      }
    );
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}
