import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputEmail: any;
  inputPassword: any;
  error: any;

  constructor(private router: Router, private UsersService: UsersService) { 

  }

  ngOnInit() {
  }

  submitClicked(){

    this.UsersService.sendRequest(this.inputEmail, this.inputPassword)
    console.log("HEY")
    // for (var i=0; i < this.users.length; i++) {
    //   if(this.inputEmail == this.users[i].email && this.inputPassword == this.users[i].password){
    //     this.router.navigateByUrl('/account')
    //   } else {
    //     this.error = "Incorrect Username and Password"
    //   }
    // }
  }

}
