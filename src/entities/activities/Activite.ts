import ActivitieCalendar from "./ActivitieCalendar";

export default interface Activitie {
  id: number,
  description: string,
  location: string,
  calendar: ActivitieCalendar
}