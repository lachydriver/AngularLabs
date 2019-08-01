import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputEmail: any;
  inputPassword: any;
  error: any;
  users = [{email: 'lachydriver@gmail.com', password: 'password'}, {email: 'test@gmail.com', password: '123'}, {email: 'angular@gmail.com', password: 'awesome'}]

  constructor(private router: Router) { 

  }

  ngOnInit() {
  }

  submitClicked(){
    
    for (var i=0; i < this.users.length; i++) {
      if(this.inputEmail == this.users[i].email && this.inputPassword == this.users[i].password){
        this.router.navigateByUrl('/account')
      } else {
        this.error = "Incorrect Username and Password"
      }
    }
  }

}
