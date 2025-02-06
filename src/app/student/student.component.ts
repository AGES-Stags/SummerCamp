import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  @ViewChild('studentIdInput') inputId!: ElementRef;

  requestStudent() {
    console.log(this.inputId.nativeElement.value);
  }
}
