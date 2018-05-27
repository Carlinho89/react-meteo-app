export const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const getCurrentDay = (locale) => (
    weekDays[
        // Italian week starts from Monday... but the Date().getDay() === 0 is Sunday in the American one... 
        getCurrentDayId() !== 0 
            ? getCurrentDayId() -1 
            : 6
    ]);

export const getCurrentDayId = () => (new Date().getDay());