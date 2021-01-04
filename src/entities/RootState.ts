import AboutState from "./about/AboutState";
import ActivitiesState from "./activities/ActivitiesState";
import PhotosState from "./photos/PhotosState";

export default interface RootState {
  version: string;
  AboutModule: AboutState;
  ActivitesModule: ActivitiesState;
  PhotosModule: PhotosState;
}