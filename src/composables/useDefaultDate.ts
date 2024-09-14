import { ref } from "vue";
import { timezones } from "../constants/timezones";

const mappingTimezoneKitFunction = (timezone: string) => {
    const now = new Date();

    const localeString = now.toLocaleString('en-US', { timeZone: timezone });
    const zonedDate = new Date(localeString);

    const diffInMilliseconds = zonedDate.getTime() - now.getTime();
    
    // Это полный кринж, у меня так и не получилось вычислить нормально offset^_^
    const offsetInMinutes = diffInMilliseconds / 60000;
    const offsetHours = Math.floor(offsetInMinutes / 60);
    const sign = offsetHours >= 0 ? '-' : '+';
    const offset = `UTC${sign}${String(Math.abs(offsetHours + 1)).padStart(2, '0')}:00`;

    const time = zonedDate.toTimeString().split(' ')[0];

    const date = `${zonedDate.getFullYear()}-${String(zonedDate.getMonth() + 1).padStart(2, '0')}-${String(zonedDate.getDate()).padStart(2, '0')}`;

    return {
        time,
        date,
        timezone,
        offset
    };
};

export const useDateAPI = () => {
    const dateTimezoneKits = ref(timezones.map(timezone => mappingTimezoneKitFunction(timezone.name)));

    setInterval(() => {
        dateTimezoneKits.value = timezones.map(timezone => mappingTimezoneKitFunction(timezone.name));
    }, 1000);

    return {
        dateTimezoneKits
    };
};
