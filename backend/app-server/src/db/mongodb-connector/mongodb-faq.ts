import { Db } from "mongodb";

export class MongodbFAQ {
    constructor(public db:Db, public redis:Cache){

    }

    async createFAQ(faq: any){
        await this.db.collection("Faq").insertOne(faq);
    }

    async getAllFAQ(){
        // if(this.redis.)
    }
}