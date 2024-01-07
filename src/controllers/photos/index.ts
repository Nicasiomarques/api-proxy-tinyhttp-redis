import { Controller, ok } from "@/adapters/tinyHttpAdapter";
import { getPhotoOrAlbum } from "@/useCases";
import { getCacheOrSet } from "@/infra";

export const getPhotosById: Controller = async ({ params: { photoId } }) => {
  const photos = await getCacheOrSet(`photos:${photoId}`, () => getPhotoOrAlbum({ photoId }));
  return ok(photos)
};

export const getAllPhotos: Controller = async ({ query: { albumId } }) => {
  const photos = await getCacheOrSet(`photos?${albumId}`, () => getPhotoOrAlbum({ albumId }));
  return ok(photos)
};
