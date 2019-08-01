export class Users {
    username: string;
    birthdate: string;
    age: number;
    email: string;
    password: string;
    valid: boolean;
    constructor(username:string,birthdate:string,age:number=0,email:string,password:string,valid:boolean){
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }
}