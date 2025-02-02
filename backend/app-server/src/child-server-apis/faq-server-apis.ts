import { Db } from "mongodb";
import { RedisClientType } from "redis";
import { FAQ } from "model/faq";

export class FAQServerApis {
    db: Db;
    redis: RedisClientType;

    constructor(db: Db, redis: RedisClientType) {
        this.db = db;
        this.redis = redis;
    }

    async createFAQ(faq: FAQ) {

        if(faq?.language !== "English"){
            faq.question =  await 
            faq.answer = await 
        }

        const response = await this.db.collection('faqs').insertOne(faq);

        // Cache the FAQ in Redis
        await this.redis.set(`faq:${response.insertedId.toString()}`, JSON.stringify(faq));

        return response;
    }

    async getFAQs() {
        let cursor: number = 0;
        const allFAQs: any[] = [];

        do {
            const reply = await this.redis.scan(cursor, {
                MATCH: 'faq:*',
                COUNT: 100
            });

            cursor = reply.cursor;
            const keys = reply.keys;

            if (keys.length > 0) {
                const values = await this.redis.mGet(keys);

                values.forEach(value => {
                    if (value) {
                        allFAQs.push(JSON.parse(value));
                    }
                });
            }
        } while (cursor !== 0);

        if (allFAQs.length === 0) {
            const faqsFromDB = await this.db.collection('faqs').find().toArray();

            for (const faq of faqsFromDB) {
                await this.redis.set(`faq:${faq._id.toString()}`, JSON.stringify(faq));
            }

            return faqsFromDB;
        }

        return allFAQs;
    }

    async updateFAQ(faq: any) {
        const response = await this.db.collection('faqs').updateOne(faq, {_id: faq._id});
        await this.redis.del([`faq:${faq._id.toString()}`]);
        return response;
    }

    async deleteFAQ(faqid: any) {
        const response = await this.db.collection('faqs').deleteOne({_id: faqid});
        await this.redis.del([`faq:${faqid._id.toString()}`]);
        return response;
    }


}
