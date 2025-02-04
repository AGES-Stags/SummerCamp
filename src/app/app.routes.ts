import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: '', component: HomeComponent },
];
