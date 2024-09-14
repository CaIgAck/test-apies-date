import { Temporal } from "@js-temporal/polyfill";
import { ref } from "vue";
import { timezones } from "../constants/timezones";
  

const mappingTimezoneKitFunction = (timezone: string) => {
    const time = Temporal.Now.plainTimeISO(timezone).toString()
    const date = Temporal.Now.plainDateISO(timezone).toString()
    const offset = Temporal.Now.zonedDateTimeISO(timezone).offset

    return {
        time,
        date,
        timezone: timezone,
        offset
    }
}


export const useTemporalDate = () => {
    const temporalTimezoneKits = ref(timezones.map(timezone => mappingTimezoneKitFunction(timezone.name)));

    setInterval(() => {
        temporalTimezoneKits.value = timezones.map(timezone => mappingTimezoneKitFunction(timezone.name))
    }, 1000)

    return {
        temporalTimezoneKits
    }
}