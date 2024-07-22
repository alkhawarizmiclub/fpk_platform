const randomInt = (min, max) => {
    return min + Math.random() * (max - min);
}

const yearsListUntilToday = (firstYear, reverse) => {
    const years = [];

    if (reverse) {
        for (let year = new Date().getFullYear(); year >= firstYear; year--) {
            years.push(year);
        }
    } else {
        for (let year = firstYear; year <= new Date().getFullYear(); year++) {
            years.push(year);
        }
    }

    return years;
}

function parseDateTime(dateTimeString) {
    // Split the date and time parts
    const [datePart, timePart] = dateTimeString.split(' ');

    // Split the date part into year, month, and day
    const [year, month, day] = datePart.split('-').map(Number);

    // Split the time part into hours, minutes, and seconds
    const [hours, minutes, seconds] = timePart.split(':').map(Number);

    // Note: Months are zero-indexed in JavaScript Date objects (0 = January, 11 = December)
    return new Date(year, month - 1, day, hours, minutes, seconds);
}

function dateToString(dateObj, format) {
    const options = {
        'DD': ('0' + dateObj.getDate()).slice(-2),
        'MMMM': dateObj.toLocaleString('default', { month: 'long' }),
        'MM': ('0' + (dateObj.getMonth() + 1)).slice(-2),
        'YYYY': dateObj.getFullYear(),
        'HH': ('0' + dateObj.getHours()).slice(-2),
        'mm': ('0' + dateObj.getMinutes()).slice(-2),
        'ss': ('0' + dateObj.getSeconds()).slice(-2),
    };

    return format.replace(/DD|MMMM|MM|YYYY|HH|mm|ss/g, match => options[match]);
}

export { randomInt, yearsListUntilToday, parseDateTime, dateToString };