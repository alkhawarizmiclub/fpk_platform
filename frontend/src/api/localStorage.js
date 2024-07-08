const readFromLocalStorage = (key, defaultFallbackValue) => {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultFallbackValue;
}

const writeToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export { readFromLocalStorage, writeToLocalStorage };