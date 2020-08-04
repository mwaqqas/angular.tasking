import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TaskEditComponent } from '../task-edit/task-edit.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit, OnDestroy {
  mediaSub: Subscription;
  isDeviceXs: boolean;
  taskList: Task[];

  constructor(
    private mediaObserver: MediaObserver,
    private taskSrv: TaskService,
    public dialog: MatDialog
  ) {
    this.taskList = taskSrv.taskList;
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

  onTaskStatusToggle(task: Task) {
    this.taskSrv.toggleTaskStatus(task);
  }

  openTaskCreate() {
    this.dialog.open(TaskEditComponent, {
      data: {
        task: {
          id: '',
          title: '',
          description: '',
          category: '',
          completed: false,
        },
        isEditMode: false,
      },
    });
  }

  launchTaskDetails(task: Task): void {
    console.log(task);
    this.dialog.open(TaskDetailComponent, { data: task });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.taskSrv.taskList,
      event.previousIndex,
      event.currentIndex
    );
  }

  onDeleteItem(task: Task) {
    this.taskSrv.delete(task);
  }

  itemClick() {
    console.log('item clicked');
  }
}
