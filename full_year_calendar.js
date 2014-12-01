var FullYearCalendar = {};

(function(FullYearCalendar) {

    var _today = new Date();

    FullYearCalendar.getMonthTable = function(month) {

        var monthObj = {};
        monthObj.monthName = getMonthName(month);
        var lastDayOfMonth = new Date(new Date(month + 2 + "/1/" + _today.getFullYear()) - 1);
        var firstOfMonth = new Date(month + 1 + "/1/" + _today.getFullYear());
        var weeks = [];
        var day = 1;
        while (day <= lastDayOfMonth.getDate()) {
            var week = {};
            for (var weekDay = 0; weekDay < 7; weekDay++){
                if (day == 1 && weekDay < firstOfMonth.getDay()) { 
                    week["day" + weekDay] = "";
                } else if (day > lastDayOfMonth.getDate() && lastDayOfMonth.getDay() < weekDay)   {
                    week["day" + weekDay] = "";
                } else {
                    week["day" + weekDay] = day;
                    day++;
                }
            }
            weeks.push(week);
        }

        monthObj.weeks = weeks;

        return monthObj;
    };

    function getMonthName(monthNumber) {
        var monthName;

        switch(monthNumber) {
            case 0: 
                monthName = "January";
                break;
            case 1: 
                monthName = "February"
                break;
            case 2: 
                monthName = "March"
                break;
            case 3: 
                monthName = "April"
                break;
            case 4: 
                monthName = "May"
                break;
            case 5: 
                monthName = "June"
                break;
            case 6: 
                monthName = "July"
                break;
            case 7: 
                monthName = "August"
                break;
            case 8: 
                monthName = "September"
                break;
            case 9: 
                monthName = "October"
                break;
            case 10: 
                monthName = "November"
                break;
            case 11: 
                monthName = "December"
                break;
            default:
                monthName = "NA";
                break;
        }

        return monthName;
    };


})(FullYearCalendar);



