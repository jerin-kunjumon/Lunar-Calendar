import dayjs from "dayjs";
const suncalc = require('suncalc');

export function getMonth(month = dayjs().month()) {
  const year = dayjs().year()
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()
  let currentMonthCount = 0 - firstDayOfTheMonth
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++
      const day = dayjs(new Date(year, month, currentMonthCount))
      const moonIllumination = suncalc.getMoonIllumination(day.toDate())
      const phase = Math.round(moonIllumination.fraction * 20) / 20
      const angle = moonIllumination.angle > 0? 'Waxing' : 'Waning'
      day.moonPhase = {
        fraction: moonIllumination.fraction,
        angle: moonIllumination.angle,
        phase: phase ===0 ?'No Moon':(angle === 'Waxing' && phase <= 0.25)? 'Waxing Crescent' : (angle === 'Waxing' && phase <= 0.5)? 'First Quarter' : (angle === 'Waxing' &&phase <= 0.95)? 'Waxing Gibbous'  : (angle === 'Waning' && phase <= 0.25)? 'Waning Crescent' : angle === 'Waning' && phase <= 0.5? 'Last Quarter' :angle === 'Waning' &&  phase <= 0.95? 'Waning Gibbous' : 'Full Moon'
      }
      return day
    })
  })

  return daysMatrix
}



