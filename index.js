const timeDifference = (current, previous) => {

  const milliSecondsPerMinute = 60 * 1000;
  const milliSecondsPerHour = milliSecondsPerMinute * 60;
  const milliSecondsPerDay = milliSecondsPerHour * 24;
  const milliSecondsPerMonth = milliSecondsPerDay * 30;
  const milliSecondsPerYear = milliSecondsPerDay * 365;

  const elapsed = current - previous;
  if (elapsed < milliSecondsPerMinute / 3) {
    return 'Just now';
  }
  if (elapsed < milliSecondsPerMinute) {
    return 'Less than 1 min ago';
  } else if (elapsed < milliSecondsPerHour) {
    let minute = Math.round(elapsed / milliSecondsPerMinute)
    if (minute === 1) return minute + ' min ago'
    return minute + ' mins ago'
  } else if (elapsed < milliSecondsPerDay) {
    let hour = Math.round(elapsed / milliSecondsPerHour)
    if (hour === 1) return hour + ' hour ago'
    return hour + ' hours ago'
  } else if (elapsed < milliSecondsPerMonth) {
    let day = Math.round(elapsed / milliSecondsPerDay)
    if (day === 1) return day + ' day ago'
    return day + ' days ago'
  } else if (elapsed < milliSecondsPerYear) {
    let month = Math.round(elapsed / milliSecondsPerMonth)
    if (month === 1) return month + ' month ago'
    return month + ' months ago'
  } else {
    let year = Math.round(elapsed / milliSecondsPerYear)
    if (year === 1) return year + ' year ago'
    return year + ' years ago'
  }
}

const timeDifferenceForDate = (date) => {
  const valid = new Date(date)
  if (valid == "Invalid Date") return "Invalid Date"
  const current = new Date()

  return timeDifference(current, valid.getTime())
}

const readableTimestamp = (date, format, month) => {
  const currentTime = new Date(date)
  if (currentTime == "Invalid Date") return "Invalid Date"
  let newDate = ""
  let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
  if (format === undefined || format === null) {
    format = "D-M-Y at h:m"
  }
  for (let i = 0; i < format.length; i++) {
    switch (format[i]) {
      case "Y":
        newDate += currentTime.getFullYear()
        break
      case "M":
        let months = currentTime.getMonth() + 1
        if (month === "month") {
          newDate += monthsList[months - 1];
          break
        } else {
          if (months < 10) {
            months = "0" + months
          }
          newDate += months
        }
        break
      case "D":
        let days = currentTime.getDate()

        if (days < 10) {
          days = "0" + days
        }
        newDate += days
        break
      case "h":
        let hour = currentTime.getHours()
        if (hour < 10) {
          hour = "0" + hour
        }
        newDate += hour
        break
      case "m":
        let minute = currentTime.getMinutes()
        if (minute < 10) {
          minute = "0" + minute
        }
        newDate += minute
        break
      case "s":
        let second = currentTime.getSeconds()
        if (second < 10) {
          second = "0" + second
        }
        newDate += second
        break
      default:
        newDate += format[i]
        break
    }
  }
  return newDate
}


module.exports = { timeDifferenceForDate, readableTimestamp }