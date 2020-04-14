export default (params) => {
    const { gender, isDisabled, isOlderThan, lastDigit, setDays, setBuySchedule, setTransitSchedule } = params;
    const result = {};

    //* get assigned days
    if (gender === 'M') {
        result.days = 'MAR, JUE, SAB';
    } else if (gender === 'F') {
        result.days = 'LUN, MIE, VIE';
    }

    //* trigger special schedule
    if (isDisabled === 'Y' || isOlderThan === 'Y') {
        result.buy = 'DESDE 11:00AM';
        result.transit = '11:00AM - 1:00PM';
    }

    //* calculate regular schedule
    switch (lastDigit) {
        case '0':
            result.buy = 'DESDE 10:00AM';
            result.transit = '9:30AM - 11:30AM';
            break;
        case '1':
            result.buy = 'DESDE 1:00PM';
            result.transit = '12:30PM - 2:30PM';
            break;
        case '2':
            result.buy = 'DESDE 2:00PM';
            result.transit = '1:30PM - 3:30PM';
            break;
        case '3':
            result.buy = 'DESDE 3:00PM';
            result.transit = '2:30PM - 4:30PM';
            break;
        case '4':
            result.buy = 'DESDE 4:00PM';
            result.transit = '3:30PM - 5:30PM';
            break;
        case '5':
            result.buy = 'DESDE 5:00PM';
            result.transit = '4:30PM - 6:30PM';
            break;
        case '6':
            result.buy = 'DESDE 6:00PM';
            result.transit = '5:30PM - 7:30PM';
            break;
        case '7':
            result.buy = 'DESDE 7:00AM';
            result.transit = '6:30AM - 8:30AM';
            break;
        case '8':
            result.buy = 'DESDE 8:00AM';
            result.transit = '7:30AM - 9:30AM';
            break;
        case '9':
            result.buy = 'DESDE 9:00AM';
            result.transit = '8:30AM - 10:30AM';
            break;
    }

    //* set calculared results into hooks
    setDays(result.days);
    setBuySchedule(result.buy);
    setTransitSchedule(result.transit);
};