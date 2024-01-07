import { REDIS_URL } from "@/constants";
import { isNullOrEmpty } from "@/helpers";
import { createClient } from "redis";

const CACHE_EXPIRATION_TIME = 200;

let redisClient: any = null;

export const initRedis = async () => {
  if (!redisClient) {
    redisClient = redisClient = await createClient({ url: REDIS_URL })
      .on("connect", () => console.log("Redis is online ✅"))
      .on("error", console.log)
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
  if (cachedValue) {
    const parsedValue = JSON.parse(cachedValue);
    if (isNullOrEmpty(parsedValue)) return fetchFn();
    return parsedValue;
  }
  const freshData = await fetchFn();
  if (!isNullOrEmpty(freshData)) {
    redisClient.setEx(key, CACHE_EXPIRATION_TIME, JSON.stringify(freshData));
  }
  return freshData;
};
