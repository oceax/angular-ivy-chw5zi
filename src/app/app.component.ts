import { Component } from '@angular/core';
import { ITask } from './itask';
import { TaskList } from './mock-tasklist';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskList = TaskList;

  agregarTarea(taskText: string) {
    this.taskList.push({
      id: this.taskList.length + 1,
      text: taskText,
      completed: false,
    });
  }

  eliminarTarea(task: ITask) {
    const index = this.taskList.indexOf(task);
    this.taskList.splice(index, 1);
  }
}
