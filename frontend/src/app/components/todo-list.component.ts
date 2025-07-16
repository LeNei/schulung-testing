import { FormsModule } from "@angular/forms";
import { ButtonComponent } from "./button.component";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-todo-list",
  imports: [ButtonComponent, FormsModule, NgFor],
  template: `
    <div>
      <h2>Todo List</h2>
      <ul>
        <li *ngFor="let todo of todos; let i = index">
          {{ todo }}
          <app-button
            data-testid="remove"
            label="Remove"
            (clicked)="removeTodo(i)"
          >
          </app-button>
        </li>
      </ul>
      <input [(ngModel)]="newTodo" placeholder="New todo" />
      <app-button label="Add" (clicked)="addTodo()"> </app-button>
    </div>
  `,
})
export class TodoListComponent {
  @Input() todos: string[] = [];
  @Output() todosChange = new EventEmitter<string[]>();

  newTodo: string = "";

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos = [...this.todos, this.newTodo.trim()];
      this.todosChange.emit(this.todos);
      this.newTodo = "";
    }
  }

  removeTodo(index: number) {
    this.todos = this.todos.filter((_, i) => i !== index);
    this.todosChange.emit(this.todos);
  }
}
