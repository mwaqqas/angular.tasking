import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { title } from 'process';

const sourceTaskList: Task[] = [
  {
    id: '100',
    title: 'Learn Angular',
    completed: true,
    category: 'green',
    description: `I'm baby typewriter poutine wolf try-hard, slow-carb skateboard quinoa seitan. Irony synth master cleanse 8-bit woke franzen af tousled tote bag jianbing kitsch enamel pin austin tbh. Wayfarers green juice cliche tousled health goth. Mumblecore portland twee prism, post-ironic adaptogen ethical neutra small batch taiyaki photo booth williamsburg man bun. Craft beer ugh swag lomo intelligentsia. Humblebrag affogato lumbersexual, kogi knausgaard photo booth austin. Etsy narwhal keytar affogato, locavore snackwave pickled thundercats freegan tacos migas knausgaard.`,
  },
  {
    id: '101',
    title: 'Write Frontend Code',
    completed: false,
    category: 'blue',
    description: `Plaid pork belly aesthetic mustache health goth hot chicken. Affogato tilde stumptown normcore, waistcoat fixie pinterest. Cardigan iceland whatever, farm-to-table salvia biodiesel chartreuse irony.`,
  },
  {
    id: '102',
    title: 'Write Backend Code',
    completed: false,
    category: 'red',
    description: `Neutra affogato cronut, truffaut pabst hashtag leggings venmo 90's iPhone raclette church-key cold-pressed. `,
  },
  {
    id: '103',
    title: 'App deployment',
    completed: false,
    category: 'green',
  },
  {
    id: '104',
    title: 'App Testing',
    completed: false,
    category: 'green',
  },
  {
    id: '105',
    title: 'Monitoring and Logging',
    completed: false,
    category: 'green',
  },
  {
    id: '106',
    title: 'Make Profit',
    completed: false,
    category: 'green',
  },
  {
    id: '107',
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
