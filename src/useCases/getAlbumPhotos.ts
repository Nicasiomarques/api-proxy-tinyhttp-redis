import { API_URL_PHOTOS } from "@/constants";
import { httpClient } from "@/infra";

type GetAlbumPhotoIn = Partial<{
  albumId: string;
  photoId: string;
}>;

type PhotoProps = {
  albumId: number;
  id: number;
  title: string;
  url: String;
  thumbnailUrl: string;
};

type GetAlbumPhotoOut = ReadonlyArray<PhotoProps> | PhotoProps | null;

export type GetPhotoOrAlbum = (props: GetAlbumPhotoIn) => Promise<GetAlbumPhotoOut>;

export const getPhotoAlbum: GetPhotoOrAlbum = async ({ albumId, photoId }) => {
  const { data } = await httpClient<GetAlbumPhotoOut>(`${API_URL_PHOTOS}/${photoId ?? ""}`, {
    params: { albumId },
  });
  return data ?? null;
};
