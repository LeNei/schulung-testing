import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  template: ` <button (click)="handleClick()">{{ label }}</button> `,
  styles: [
    `
      button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() label: string = "Click Me";
  @Output() clicked = new EventEmitter<void>();

  handleClick(): void {
    this.clicked.emit();
  }
}
