import rawData from '@/data/activities.ts';
import Activitie from '@/entities/activities/Activitie';

const activitiesHandleData = (data: any): Activitie => {
  const [hour, minutes] = data.time.split(':');
  const dateTimeConversion = new Date();
  dateTimeConversion.setHours(Number(hour));
  dateTimeConversion.setMinutes(Number(minutes));

  return {
    id: data.id,
    description: data.description,
    location: data.location,
    calendar: {      
      time: {
        raw: data.time,
        converted: dateTimeConversion
      },
      weekDay: data.weekDay
    }
  };
}

export const ActivitiesService = {
  all(): Activitie[] {
    const activities: Activitie[] = [];
    let activitie: Activitie;

    for (const item of rawData) {
      activitie = activitiesHandleData(item);

      activities.push(activitie);
    }

    return activities;
  },

  getNext(): Activitie|null {
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
}