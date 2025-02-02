import { LoginServerApis } from "../../child-server-apis/login-server-apis";
import { Router } from "express";


export function LoginRoutes(
    router: Router, 
    loginServerApis:LoginServerApis){

        router.get("", async (req, res)=>{
            const email = req.body.email;
            const password = req.body.password;
            if(email && password){
                const response = loginServerApis.verifyUserLogin(email, password);
                if(response === "Wrong Crediential"){
                    res.status(400).send("Wrong Crediential");
                }else{
                    res.status(200).send(response);
                }
            }else {
                res.status(400).send("Parameter Missing");
            }
        })
}