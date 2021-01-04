import Activitie from "./Activite";

export default interface ActivitiesState {
  activities: Activitie[];

  nextActivitie?: Activitie;
}