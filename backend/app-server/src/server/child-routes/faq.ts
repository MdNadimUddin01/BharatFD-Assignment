import { Router } from "express";
import { FAQServerApis } from "../../child-server-apis/faq-server-apis";

export function faq(router:Router, faqServerApi: FAQServerApis){

    router.post("/create-faq" ,async (req , res) => {
        try {
            const faq = req.body.faq;
            if(faq){
                const response = await faqServerApi.createFAQ(faq);
                res.status(200).send(response.insertedId);
            }else {
                res.status(403).send("Missing Parameter");
            }
        } catch (error) {
            res.status(500).send("Internal Server Error");
        }
    });

    router.get("/get-faqs" ,async (req , res) => {
        try {
            const faq = req.body.faq;
            if(faq){
                const response = await faqServerApi.getFAQs();
                res.status(200).send(response);
            }else {
                res.status(403).send("Missing Parameter");
            }
        } catch (error) {
            res.status(500).send("Internal Server Error");
        }
    });

    router.put("/update-faq", async (req, res)=>{
        try {
            const faq = req.body.faq;
            if(faq){
                const response = await faqServerApi.updateFAQ(faq);
                res.status(200).send(response);
            }else {
                res.status(403).send("Missing Parameter");
            }
        } catch (error) {
            res.status(500).send("Internal Server Error");
        }
    })

    router.delete("/delete-faq", async (req, res)=>{
        try {
            const faqid = req.body.faqid;
            if(faqid){
                const response = await faqServerApi.deleteFAQ(faqid);
                res.status(200).send(response);
            }else {
                res.status(403).send("Missing Parameter");
            }
        } catch (error) {
            res.status(500).send("Internal Server Error");
        }
    })
}

