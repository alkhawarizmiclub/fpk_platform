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


export { randomInt, yearsListUntilToday, parseDateTime };