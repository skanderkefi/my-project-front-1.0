import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../dataService/data.service';
import {Md5} from 'ts-md5/dist/md5';
import {map} from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login={"email":"","password":""}

  constructor(public http:Http,
    public activatedRoute:ActivatedRoute,
    public dataService:DataService,
    public router : Router) { }

  ngOnInit() {
  }

loginF(){
  this.dataService.loginS(this.login)
  .then((res)=>{
    this.router.navigate(['/home']);
    console.log("u r logged in !");
  })
  .catch((err)=>{
    this.router.navigate(['/']);
    console.log("u r not logged in ! ");
    console.log(err);


  })
  
}
}
