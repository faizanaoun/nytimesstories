export const apiError = (error) => {
    return {
        error,
        status: false,
    }
}

export const getDateAndTime = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const seconds = newDate.getSeconds();
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}