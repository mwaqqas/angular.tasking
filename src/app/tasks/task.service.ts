import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { title } from 'process';

const sourceTaskList: Task[] = [
  {
    title: 'Learn Angular',
    completed: true,
    category: 'green',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Write Frontend Code',
    completed: false,
    category: 'blue',
  },
  {
    title: 'Write Backend Code',
    completed: false,
    category: 'red',
  },
  {
    title: 'App deployment',
    completed: false,
    category: 'green',
  },
  {
    title: 'Monitoring and Logging',
    completed: false,
    category: 'green',
  },
];

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskList = sourceTaskList;

  constructor() {}

  create(title: string, description?: string, category?: string) {
    let task = {
      title: title,
      description: description,
      category: category,
      completed: false,
    };

    this.taskList.unshift(task);
  }
  update() {}
  delete(index: number) {
    this.taskList.splice(index, 1);
  }
}
