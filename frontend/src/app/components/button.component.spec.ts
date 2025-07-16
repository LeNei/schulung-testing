import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ButtonComponent } from "./button.component";
import { DebugElement } from "@angular/core";

describe("ButtonComponent", () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let buttonDe: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    buttonDe = fixture.debugElement.query(By.css("button"));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display the label", () => {
    component.label = "Click Me!";
    fixture.detectChanges();
    const buttonEl: HTMLButtonElement =
      fixture.nativeElement.querySelector("button");
    expect(buttonEl.textContent).toContain("Click Me!");
  });

  it("should emit clicked event when button is clicked", () => {
    spyOn(component.clicked, "emit");
    component.label = "Test";
    fixture.detectChanges();

    buttonDe = fixture.debugElement.query(By.css("button"));
    buttonDe.triggerEventHandler("click", null);

    expect(component.clicked.emit).toHaveBeenCalled();
  });
});
