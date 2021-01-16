import Activitie from "./Activitie";

export default interface ActivitiesState {
  activities: Activitie[];

  nextActivitie?: Activitie;
}