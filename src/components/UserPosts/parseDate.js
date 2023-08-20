function parseDate(date){
    const month = parseInt(date.slice(5,7))
    const day = parseInt(date.slice(8,10))
    const hour = parseInt(date.slice(11,13))
    const minute = parseInt(date.slice(14,16))
    
    return {month: month, day: day, hour: hour, minute: minute}
}

export default parseDate