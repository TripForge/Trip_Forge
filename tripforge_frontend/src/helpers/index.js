export const createNewArray = (size, val) => Array(size).fill(val);

export const days = (startDate, endDate) => ((endDate?.getTime() - startDate?.getTime()) / (1000 * 3600 * 24));

export const dateString = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let myDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    return myDate;
};