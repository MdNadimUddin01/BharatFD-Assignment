export class LoginServerApis {

    constructor(
    ) {}

    verifyUserLogin(email:string, password:string){
        if(email === 'admin@123.com' && password === "Admin123"){
            return "fAqAdMiN";
        }else {
            return "Wrong Crediential";
        }
    }

}