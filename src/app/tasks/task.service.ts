import { Injectable } from '@angular/core';
import { Task } from './task.model';

const sourceTaskList: Task[] = [
  {
    id: '_1dt9500',
    title: 'Learn Angular',
    completed: true,
    category: 'green',
    description: `I'm baby typewriter poutine wolf try-hard, slow-carb skateboard quinoa seitan. Irony synth master cleanse 8-bit woke franzen af tousled tote bag jianbing kitsch enamel pin austin tbh. Wayfarers green juice cliche tousled health goth. Mumblecore portland twee prism, post-ironic adaptogen ethical neutra small batch taiyaki photo booth williamsburg man bun. Craft beer ugh swag lomo intelligentsia. Humblebrag affogato lumbersexual, kogi knausgaard photo booth austin. Etsy narwhal keytar affogato, locavore snackwave pickled thundercats freegan tacos migas knausgaard.`,
  },
  {
    id: '_ienxyqq',
    title: 'Write Frontend Code',
    completed: false,
    category: 'blue',
    description: `Plaid pork belly aesthetic mustache health goth hot chicken. Affogato tilde stumptown normcore, waistcoat fixie pinterest. Cardigan iceland whatever, farm-to-table salvia biodiesel chartreuse irony.`,
  },
  {
    id: '_vknfm3p',
    title: 'Write Backend Code',
    completed: false,
    category: 'red',
    description: `Neutra affogato cronut, truffaut pabst hashtag leggings venmo 90's iPhone raclette church-key cold-pressed. `,
  },
  {
    id: '_9oezau3',
    title: 'App deployment which is a very long task name',
    completed: false,
    category: 'green',
  },
  {
    id: '_9dwpiol',
    title: 'App Testing',
    completed: false,
    category: 'green',
  },
  {
    id: '_73gtrwg',
    title: 'Monitoring and Logging',
    completed: false,
    category: 'green',
  },
  {
    id: '_ym4ycvk',
    title: 'Make Profit',
    completed: false,
    category: 'green',
  },
  {
    id: '_xa8j4e3',
    title: 'Future Improvements',
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

  // CRUD Operations
  create(task: Task) {
    task.id = this.createTaskID();
    if (!task.category) {
      task.category = 'default';
    }
    this.taskList.unshift(task);
    console.log(task);
  }
  update(task: Task): void {
    console.log(task);
    const index = this.taskList.findIndex((item) => item['id'] === task.id);
    console.log(index);
    this.taskList[index] = task;
  }

  delete(task: Task): void {
    const index: number = this.taskList.findIndex(
      (item) => item['id'] === task.id
    );
    this.taskList.splice(index, 1);
  }

  // HELPERS
  createTaskID(): string {
    return '_' + Math.random().toString(36).substring(2, 9);
  }

  toggleTaskStatus(task: Task) {
    task.completed = !task.completed;
    console.log(task);

    // let tid = this.taskList.findIndex((item) => item['id'] === task.id);
    // console.log(tid);

    return task;
  }
}
