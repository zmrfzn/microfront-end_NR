import { Component, OnInit } from '@angular/core';
import { TableApiService } from '../shared/table-api.service';

import { Students } from './Students';



@Component({
  selector: 'app-shared-http',
  templateUrl: './shared-http.component.html',
  styleUrls: ['./shared-http.component.scss']
})
export class SharedHttpComponent implements OnInit {
  constructor(private tabService: TableApiService) { }

  columns = ["id", "name", "username", "email"];

  students : Students[] = [];


  ngOnInit(): void {
    this.tabService.getStudents().subscribe(
      (res)=>{
        this.students = res;
        console.log('here', res)
      },
      (err)=>{
        console.log(err)
      }
    )
  }

}
