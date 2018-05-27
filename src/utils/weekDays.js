export const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const getCurrentDay = () => (
    weekDays[
        // Italian week starts from Monday... but the Date().getDay() === 0 is Sunday in the American one... 
        new Date().getDay() !== 0 
            ? new Date().getDay() -1 
            : 6
    ]);
