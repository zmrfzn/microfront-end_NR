import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from '../shared-http/Students';

@Injectable({
  providedIn: 'root'
})
export class TableApiService {

  constructor(private http: HttpClient) { }

  url: string = "https://jsonplaceholder.typicode.com/users";


  getStudents(){
    return this.http.get<Students[]>(this.url)
  }
}
