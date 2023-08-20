function compareDates(date1, date2){
    let days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let difference = {
        month: date2.month - date1.month,
        day: date2.day - date1.day,
        hour: date2.hour - date1.hour,
        minute: date2.minute - date1.minute
    }

    if(difference.minute < 0){
        difference.minute += 60
        difference.hour -= 1
    }

    if(difference.hour < 0){
        difference.hour += 24
        difference.day -= 1
    }

    if(difference.day < 0){
        if(date2.month===1){
            difference.day += 31
        }else{
            difference.day += days_in_month[date2.month - 2]
        }
        difference.month -= 1
    }

    if(difference.month < 0){
        difference.month +=12
    }

    if(difference.month===0){
        if(difference.day===0){
            if(difference.hour===0){
                if(difference.minute===0){
                    return "just a few seconds"
                }
                if(difference.minute===1){
                    return "1 minute"
                }
                return [difference.minute.toString(10),"minutes"].join(" ")
            }
            if(difference.hour===1){
                return "1 hour"
            }
            return [difference.hour.toString(10),"hours"].join(" ")
        }
        if(difference.day===1){
            return "1 day"
        }
        return [difference.day.toString(10),"days"].join(" ")
    }else{
        return "over a month ago"
    }

}

export default compareDates