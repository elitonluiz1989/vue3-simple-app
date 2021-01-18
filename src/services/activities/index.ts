import rawData from '@/data/activities.ts';
import Activitie from '@/entities/activities/Activitie';

export default class ActivitiesService {
  page = 1;
  limit = 4;

  all(page = 1): Activitie[] {
    this.page = page;

    return this.setActivities();
  }

  nextActivitie(): Activitie|null {
    const activities = this.all();
    const currentDate = new Date();
    const currentWeekDay = currentDate.getDay();
    let activitie: Activitie|null = null;

    let filteredActivities = activities.filter(a => a.calendar.weekDay === currentWeekDay);
    filteredActivities = filteredActivities.filter(fa => fa.calendar.time.converted >= currentDate);

    if (filteredActivities.length === 0) {
      const nextWeekDay = new Date(currentDate.setHours(24)).getDay();      
      filteredActivities = activities.filter(a => a.calendar.weekDay === nextWeekDay);
    }

    if (filteredActivities.length > 0) {
      activitie = filteredActivities[0];
    }

    return activitie;
  }

  private activitieTimeRawToDate(time: string, weekDay: number): Date {
    const [hour, minutes] = time.split(':');
    const dateTimeConversion = new Date();
  
    let weekDayDiff = (dateTimeConversion.getDay() - weekDay);
    weekDayDiff = weekDayDiff !== 0 ? -weekDayDiff : weekDayDiff;
  
    dateTimeConversion.setDate(dateTimeConversion.getDate() + weekDayDiff);
    dateTimeConversion.setHours(Number(hour));
    dateTimeConversion.setMinutes(Number(minutes));

    return dateTimeConversion;
  }

  private activitiesHandleData(data: any): Activitie {  
    const timeCasted = this.activitieTimeRawToDate(data.time, data.weekDay);

    return {
      id: data.id,
      description: data.description,
      location: data.location,
      calendar: {      
        time: {
          raw: data.time,
          converted: timeCasted
        },
        weekDay: data.weekDay
      }
    };
  }

  private setActivities(): Activitie[] {    
    const activities: Activitie[] = [];
    let activitie: Activitie;
    let paginatedData = rawData;
    let counter = 1;
   
    if (this.limit > 0) {
      const offset = (this.limit * (this.page - 1))
      const offsetLimit = offset + this.limit; 
      
      paginatedData = rawData.slice(offset, offsetLimit);
    }

    for (const item of paginatedData) {
      activitie = this.activitiesHandleData(item);

      activities.push(activitie);

      if (counter === this.limit) {
        break;
      }

      counter = this.limit > 0 ? counter + 1 : counter;
    }

    return activities;
  }
}