import { Component, OnInit } from '@angular/core';
import {DataService} from '../../dataService/data.service';
import {Http} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';


@Component({
  selector: 'app-registration',
  templateUrl:'./registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  users:any[];
  user={"passWord":"","firstName":"","lastName":"","emailId":""}
  //user={"name":"","username":"","email":""}
  
  constructor(public dataService:DataService, public http:Http) {
   }

  ngOnInit() {
  }

  addFct(){
    const md5 = new Md5();
    
    this.user.passWord= md5.appendStr(this.user.passWord).end() as string;
    console.log(this.user.passWord)
    this.dataService.addData(this.user).subscribe(user=>{});
  }


}
