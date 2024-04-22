import dayjs from "dayjs";
const { DateTime } = require('luxon');

export function getMonth(month = dayjs().month()) {
    const year = dayjs().year()
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()
    let currentMonthCount = 0 - firstDayOfTheMonth
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++
            return dayjs(new Date(year, month, currentMonthCount))
            })
    })
    const suncalc = require('suncalc');
const { DateTime } = require('luxon');

// Define the start and end dates for the calendar
const startDate = new Date('2022-01-01T00:00:00Z');
const endDate = new Date('2022-12-31T23:59:59Z');

// Define the number of days in a lunar month (approximately 29.53 days)
const daysInLunarMonth = 29.53;

// Create an array to store the moon phases
const moonPhases = [];
console.log(Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24) / daysInLunarMonth),"HII")
// Loop through each day in a lunar month
for (let i = 0; i < Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24) / daysInLunarMonth); i++) {
  // Calculate the date for the current day in the lunar month
  const date = new Date(startDate.getTime() + i * daysInLunarMonth * 1000 * 60 * 60 * 24);

  // Get the moon illumination for the current day in the lunar month
  const moonIllumination = suncalc.getMoonIllumination(date);

  // Create a DateTime object for the current day in the lunar month
  const dateTime = DateTime.fromJSDate(date);

  // Add the moon phase to the array with the date and time
  moonPhases.push({
    fraction: moonIllumination.fraction,
    date: dateTime.toISO(),
  });
}

// Print the moon phases for each day in the lunar month with the date and time
console.log(moonPhases);

    return daysMatrix
}



