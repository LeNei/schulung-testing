import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TodoListComponent } from "./todo-list.component";
import { ButtonComponent } from "./button.component";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

describe("TodoListComponent", () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent, ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render initial todos", () => {
    component.todos = ["Learn Angular", "Write tests"];
    fixture.detectChanges();
    const todoItems = fixture.nativeElement.querySelectorAll("li");
    expect(todoItems.length).toBe(2);
    expect(todoItems[0].textContent).toContain("Learn Angular");
    expect(todoItems[1].textContent).toContain("Write tests");
  });

  it("should add a new todo", () => {
    component.newTodo = "Test Todo";
    component.addTodo();
    fixture.detectChanges();
    const todoItems = fixture.nativeElement.querySelectorAll("li");
    expect(todoItems.length).toBe(1);
    expect(todoItems[0].textContent).toContain("Test Todo");
  });

  it("should remove a todo when remove button is clicked", () => {
    component.todos = ["First", "Second"];
    fixture.detectChanges();

    // Find the first remove button and click it
    const removeButtons: DebugElement[] = fixture.debugElement.queryAll(
      By.css("[data-testid='remove']"),
    );
    removeButtons[0].triggerEventHandler("clicked", null);
    fixture.detectChanges();

    const todoItems = fixture.nativeElement.querySelectorAll("li");
    expect(todoItems.length).toBe(1);
    expect(todoItems[0].textContent).toContain("Second");
  });

  it("should emit todosChange when todos are updated", () => {
    spyOn(component.todosChange, "emit");
    component.todos = ["A"];
    component.removeTodo(0);
    expect(component.todosChange.emit).toHaveBeenCalledWith([]);
  });
});
