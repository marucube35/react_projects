export default function getCurrentDateTime() {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    const dateTime = new Date()
    const year = dateTime.getFullYear()
    const day = dateTime.getDay() + 1
    const month = dateTime.getMonth()
    const hours = dateTime.getHours()
    const minutes = dateTime.getMinutes() + 1
    const seconds = dateTime.getSeconds() + 1
    return `${months[month]} ${day < 10 ? '0' + day : day}, ${year} ${
        hours < 10 ? '0' + hours : hours
    }:${minutes < 10 ? '0' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
    }`
}
