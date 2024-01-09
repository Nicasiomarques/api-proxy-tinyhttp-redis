import { Photo, PhotoGateway } from "@/module/photo";
import { THttpClient } from "@/infra/httpClient";
import { API_URL_PHOTOS } from "@/constants";

export const makePhotoGatewayHttp = (httpClient: THttpClient): PhotoGateway => {
  const getAll = async (albumId: string): Promise<ReadonlyArray<Photo> | null> => {
    const { data } = await httpClient<Photo[]>(API_URL_PHOTOS, {
      params: { albumId },
    });
    return data || null;
  };

  const getById = async (id: string): Promise<Photo | null> => {
    const { data } = await httpClient<Photo>(`${API_URL_PHOTOS}/${id}`);
    return data || null;
  };

  return {
    getById,
    getAll
  }
};
