import { ref } from "vue";
import { timezones } from "../constants/timezones";
import { DateTime } from "luxon"



const mappingTimezoneKitFunction = (timezone: string) => {
    const time = DateTime.now().setZone(timezone).toISOTime() || DateTime.now().toISOTime();
    const date = DateTime.now().setZone(timezone).toISODate() || DateTime.now().toISODate();
    const offset = DateTime.now().setZone(timezone).offsetNameShort || DateTime.now().offsetNameShort;
     
    return {
        time,
        date,
        timezone: timezone,
        offset
    }
}


export const useLuxonDate = () => {
    const luxonTimezoneKits = ref(timezones.map(timezone => mappingTimezoneKitFunction(timezone.name)));
    
    setInterval(() => {
        luxonTimezoneKits.value = timezones.map(timezone => mappingTimezoneKitFunction(timezone.name))
    }, 1000)

    return {
        luxonTimezoneKits
    }
}