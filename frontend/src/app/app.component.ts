import { Component } from "@angular/core";
import { TodoListComponent } from "./components/todo-list.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "frontend";
  todos: string[] = ["hey"];
}
