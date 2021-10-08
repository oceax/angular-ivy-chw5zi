import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../itask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() id: number;

  @Input() text: string;

  @Output() delete: EventEmitter<ITask> = new EventEmitter();

  completed: boolean = false;

  lblBtnComplete: string = 'Completar';

  completar() {
    if (this.completed) {
      this.completed = false;
      this.lblBtnComplete = 'Completar';
    } else {
      this.completed = true;
      this.lblBtnComplete = 'Deshacer';
    }
  }

  eliminar() {
    const task: ITask = {
      id: this.id,
      text: this.text,
      completed: this.completed,
    };
    this.delete.emit(task);
  }
}
