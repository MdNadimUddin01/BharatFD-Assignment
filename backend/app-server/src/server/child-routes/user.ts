import { Router } from "express";
import { LoginServerApis } from "../../child-server-apis/login-server-apis";

export function user(
    router:Router,
    userServerApis: LoginServerApis
){
    
    router.get("/user-login",(req, res)=>{
        const email = req.body.admin;
        const password = req.body.password;

        if(email && password){
            const response = userServerApis.verifyUserLogin(email, password);
            if(response === "Wrong Crediential"){
                res.status(400).send("Wrong Crediential");
            }else {
                res.status(200).send(response);
            }
        }else {
            res.status(403).send("Parameter Missing");
        }
        
    })
}