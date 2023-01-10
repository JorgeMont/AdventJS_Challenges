function countHours(year, holidays) {
    let extraDays = 0;
    for(let i=0; i<holidays.length;i++){
      let fullDate = holidays[i] + "/" + year.toString();
      fullDate = new Date(fullDate);
      if(fullDate.getDay() <=5 &&  fullDate.getDay()>= 1){
        extraDays = extraDays+2;
      }
    }
    return extraDays;  
  }