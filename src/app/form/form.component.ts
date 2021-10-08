import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  text: string;

  @Output() addTask: EventEmitter<string> = new EventEmitter();

  agregarTarea() {
    this.addTask.emit(this.text);
    this.text = '';
  }
}
