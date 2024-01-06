import { createClient } from "redis";

import { REDIS_URL } from "../constants";

const redisClient = await createClient({ url: REDIS_URL })
  .on("error", console.log)
  .connect();

const CACHE_EXPIRATION_TIME = 3600;

export const getCacheOrSet = async <T = any>(key: string, fetchFn: () => Promise<T>) => {
  const cachedValue = await redisClient.get(key);
  if (cachedValue) return JSON.parse(cachedValue);
  const freshData = await fetchFn();
  redisClient.setEx(key, CACHE_EXPIRATION_TIME, JSON.stringify(freshData));
  return freshData;
};
