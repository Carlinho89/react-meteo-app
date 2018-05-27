export function fahrenheitToCelsius(fahr) {
    return (
        Math.floor((fahr - 32) * 5 / 9)
    );
}

export function mapConditionToIcon(conditionCode) {
    if (conditionCode)
        // TO-DO Map with real values
        switch (true) {
            case (conditionCode <= 10):
                return 'fas fa-snowflake';
            case (conditionCode <= 20):
                return 'fas fa-tint'; // rain
            case (conditionCode <= 30):
                return 'fas fa-cloud';  
            case (conditionCode <= 47):
                return 'fas fa-sun';
            default: 
                return 'fa fa-spinner fa-spin';
        }
    else
        return 'fa fa-spinner fa-spin';
} 