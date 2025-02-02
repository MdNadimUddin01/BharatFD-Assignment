import { createClient, RedisClientType } from 'redis';
export class RedisConnection {
	static client: RedisClientType = null;
	private password: string;
	private host: string;
	private port: number;

	constructor(password: string, host: string, port: number) {
		this.password = password;
		this.host = host;
		this.port = port;
	}

	async initRedis() {
		try {
			if (!RedisConnection.client) {
				RedisConnection.client = createClient({
					password: this.password,
					socket: {
						host: this.host,
						port: this.port,
						connectTimeout: 5000
					}
				});
				await RedisConnection.client.connect();
			}
		} catch (error) {
			RedisConnection.client = null;
			console.log(error);
		}
	}

	async disconnect() {
		try {
			let disconnect: any = '';
			if (RedisConnection.client && RedisConnection.client.isOpen) {
				try {
					disconnect = await RedisConnection.client.disconnect();
				} catch (error) {
					console.log('Error in disconnect command', error);
				}
			}
			RedisConnection.client = null;
		} catch (error) {
			console.log({ 'disconnect-error': error });
		}

	}

	checkRedisClientConnection() {
		let isRedisClientAvailable = false;
		if (RedisConnection.client && RedisConnection.client.isOpen && RedisConnection.client.isReady) {
			isRedisClientAvailable = true;
		}
		return isRedisClientAvailable;
	}

	getCacheDB() {
		if (RedisConnection.client) {
			return RedisConnection.client;
		} else {
			throw Error('Cache DB not Intialized');
		}
	}

}