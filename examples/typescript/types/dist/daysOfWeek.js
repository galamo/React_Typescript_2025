"use strict";
function getDayFromDate(d) {
    const day = d.getDay() + 1;
    if (day === 1)
        return "Sunday";
    return "Saturday";
}
