import { PhotosState } from "./modules/photos/interfaces";

export interface RootState {
  version: string;
  PhotosModule: PhotosState;
}