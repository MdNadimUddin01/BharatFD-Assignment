import express, { Router } from 'express';
import {RouterA} from './router';
import { LoginServerApis } from '../child-server-apis/login-server-apis';
import { environment } from "../environment"
import { MongodbConnection } from '../db/mongodb-connector';
import { RedisConnection } from '../db/redis-connector';
import { FAQServerApis } from '../child-server-apis/faq-server-apis';

const app = express();
const router = Router();
let loginServerApis : LoginServerApis;

const init = async () => {
    try {
        
        app.use('/api', router); 

        loginServerApis = new LoginServerApis();
        
        const mongodbConnection =  new MongodbConnection({dbName: environment.appServerMongodbConfig.dbName, clusterURL: environment.appServerMongodbConfig.clusterURL,
            userName: environment.appServerMongodbConfig.userName,password: environment.appServerMongodbConfig.password});
            const redisConnection = new RedisConnection(environment.redisConnection.password, environment.redisConnection.host, environment.redisConnection.port);
            
            await mongodbConnection.init();
            await redisConnection.initRedis();
            
            let db = mongodbConnection?.getDb();
            let redis = redisConnection?.getCacheDB();

            const faqServerApis = new FAQServerApis(db, redis)
            
            const PORT = environment.port;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

        RouterA(router,loginServerApis, faqServerApis);

    } catch (error) {
        console.error("Error during initialization:", error);
    }
};

export { app, init };
