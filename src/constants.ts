export const API_URL_PHOTOS = Bun.env.API_URL_PHOTOS ?? "https://jsonplaceholder.typicode.com/photos";
export const REDIS_URL = Bun.env.REDIS_URL;
export const PORT = Number(Bun.env.PORT) ?? 5000

export const Endpoint = {
  Photos: '/photos'
} as const
