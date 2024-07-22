const checkWorkingHours = (req, res, next) => {
    const now = new Date();
    const isWeekday = now.getDay() >= 1 && now.getDay() <= 5;
    const isWorkingHour = now.getHours() >= 9 && now.getHours() < 17;

    if (isWeekday && isWorkingHour){
        return next();
    }

    res.send("The web page is only available during working hours (Monday to Friday, from 9am to 5pm");

};

module.exports = checkWorkingHours;
    //if (day >= 1 && day <= 5 && hour >= 9 && hour < 17)}