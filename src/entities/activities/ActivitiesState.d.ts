import Activitie from "./Activitie";

export default interface ActivitiesState {
  page: number;
  activities: Activitie[];
  nextActivitie?: Activitie;
}