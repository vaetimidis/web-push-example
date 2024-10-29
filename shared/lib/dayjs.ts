import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration.js'
import isToday from 'dayjs/plugin/isToday.js'
import utc from 'dayjs/plugin/utc.js'
import weekOfYear from 'dayjs/plugin/weekOfYear.js'

dayjs.extend(weekOfYear)
dayjs.extend(utc)
dayjs.extend(isToday)
dayjs.extend(duration)

export function getNowDayjs() {
  return dayjs.utc().add(8, 'hour')
}

export function getNowStamp() {
  return getNowDayjs().toDate().getTime()
}

export function literalTime(stamp: number) {
  const dayOld = dayjs.utc(stamp)
  const dayNew = dayjs.utc()
  const subDay = dayNew.diff(dayOld, 'day')
  const subWeek = dayNew.diff(dayOld, 'week')
  const subMonth = dayNew.diff(dayOld, 'month')
  const subYear = dayNew.diff(dayOld, 'year')
  if (dayOld.isToday())
    return 'Today'

  if (subWeek < 1)
    return `${subDay + 1} Days ago`

  if (subMonth < 1)
    return `${subWeek} Weeks ago`

  if (subYear < 1)
    return `${subMonth} Months ago`

  return `${subYear} Years ago`
}

export function formatDate(stamp: string | number, format = 'DD.MM.YYYY HH:mm') {
  return dayjs.utc(stamp).format(format)
}

export function secondsToMinutes(seconds: number) {
  const duration = dayjs.duration(seconds, 'seconds')
  const minutes = duration.minutes()
  const paddedMinutes = String(minutes).padStart(2, '0')
  const secondsRemainder = duration.seconds()
  const paddedSecondsRemainder = String(secondsRemainder).padStart(2, '0')
  return `${paddedMinutes}:${paddedSecondsRemainder}`
}
