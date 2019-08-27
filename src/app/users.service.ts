import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

var requestURL = "http://localhost:3000/api/login";

interface UserResponse {
  username: string;
  birthdate: string;
  age: number;
  email: string;
  valid: boolean;
}

@Injectable({
  providedIn: 'root'
}) export class UsersService {
  user: UserResponse;
  constructor(private http: HttpClient){}

  sendRequest(username: string, password: string){
    this.http.post<UserResponse>(requestURL, {username: username, password: password}).subscribe(
      (res: UserResponse) => {
        console.log(res)
      },
      (err: HttpErrorResponse) => {
        console.log(err.error)
      }
    )
  }
}
