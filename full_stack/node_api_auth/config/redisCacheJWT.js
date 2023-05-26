const redis = require('redis');
const {createClient} = require("redis");

class RedisCacheJWT {
    constructor() {
        const redisHost = process.env.REDIS_CACHE_JWT_HOST || "redis.cache.jwt";
        const redisPort = process.env.REDIS_CACHE_JWT_PORT || 6379;

        this.client = createClient({ url: `redis://${redisHost}:${redisPort}` });
        this.client.connect()

        this.client.on("connect", () => {
            console.log("Redis Jwt Cache connected");
        });

        // Обработка ошибок подключения к Redis
        this.client.on('error', (err) => {
            console.error('Ошибка подключения к Redis:', err);
        });
    }

    get(key) {
        return new Promise((resolve, reject) => {
            this.client.get(key, (err, result) => {
                if (err) {
                    console.error('Ошибка при получении значения из кеша:', err);
                    reject(err);
                } else {
                    resolve(result ? JSON.parse(result) : null);
                }
            });
        });
    }

    set(key, value, expirationTimeInSeconds = 60) {
        const serializedValue = JSON.stringify(value);
        this.client.setEx(key, expirationTimeInSeconds, serializedValue, (err) => {
            if (err) {
                console.error('Ошибка при сохранении значения в кеш:', err);
            }
        });
    }

    del(key) {
        this.client.del(key, (err, count) => {
            if (err) {
                console.error('Ошибка при удалении значения из кеша:', err);
            } else {
                console.log(`Удалено ${count} значений с ключом ${key}`);
            }
        });
    }
}

const MyRedisCacheJWT = new RedisCacheJWT()

module.exports = MyRedisCacheJWT
