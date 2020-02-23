import { Component, OnInit } from '@angular/core';
import {DataService} from '../../dataService/data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any=[];
  constructor(public dataService : DataService) {
    this.displayAll();
   }

  ngOnInit() {
  }

  displayAll(){
    this.dataService.getData().subscribe(users => this.users=users);
  }

}
