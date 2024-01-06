import { REDIS_URL } from "@/constants";
import { createClient } from "redis";

const CACHE_EXPIRATION_TIME = 3600;

let redisClient: any = null;

export const initRedis = async () => {
  if (!redisClient) {
    redisClient = redisClient = await createClient({ url: REDIS_URL })
      .on("connect", () => console.log("Redis is online ✅"))
      .on('error', console.log)
      .connect();
  }
  return redisClient;
};

export const quit = () => {
  if (redisClient) {
    redisClient.quit();
    redisClient = null;
    console.log("Connection to Redis closed");
  }
};

export const getCacheOrSet = async <T = any>(key: string, fetchFn: () => Promise<T>) => {
  const cachedValue = await redisClient.get(key);
  if (cachedValue) return JSON.parse(cachedValue);
  const freshData = await fetchFn();
  redisClient.setEx(key, CACHE_EXPIRATION_TIME, JSON.stringify(freshData));
  return freshData;
};
