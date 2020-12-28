import Activitie from "@/entities/activities/Activite";

export interface ActivitiesState {
  activities: Activitie[];

  nextActivitie?: Activitie;
}