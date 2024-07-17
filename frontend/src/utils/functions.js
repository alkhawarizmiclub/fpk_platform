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


export { randomInt, yearsListUntilToday };