import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  requestStudentInformation(id: number) {
    return this.http.get(`localhost:8080/${id}`);
  }
}
