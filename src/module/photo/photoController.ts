import { Controller, ok } from "@/infra/api";
import { PhotoGateway } from "./photoGateway";

export const PhotoController = (photoGateway: PhotoGateway) => {
  const getAll: Controller = ({ query: { albumId } }) => 
    photoGateway.getAll(albumId).then(ok);

  const getById: Controller = async ({ params: { photoId } }) =>
    photoGateway.getById(photoId).then(ok);

  return {
    getById,
    getAll,
  };
};
