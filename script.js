const hrs = document.querySelector('.hrs');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');
const day = document.querySelector('.day');
const merdian = document.querySelector('.merdian');
const date = document.querySelector('.date');
const month = document.querySelector('.month')
const year = document.querySelector('.year')

// console.log(secs)



const updateTime = ()=>{
    const now = new Date();
    const currentSecond = now.getSeconds();
    const currentMinute = now.getMinutes();
    const currentHour = now.getHours();
    const currentDate = now.getDate();
    const currentYear = now.getFullYear();
    
    hrs.textContent = currentHour;

    if (currentHour == 0){
        hrs.textContent = 12
    }else if (currentHour <12){
        hrs.textContent = currentHour
    }else if (currentHour == 12) {
        hrs.textContent = 12
    }else{
        hrs.textContent = Math.abs(currentHour-12)
    }

    if(currentSecond <= 9){
        secs.textContent = '0'+currentSecond;
    }else{
        secs.textContent = currentSecond;
    }
    
    if(currentMinute <= 9){
        mins.textContent = '0'+currentMinute;
    }else{
        mins.textContent = currentMinute;
    }
    // mins.textContent = currentMinute; 
    date.textContent = currentDate;
    year.textContent = currentYear
    // console.log(currentSecond)
}

function updateDay(){
    const now = new Date();
    const dayNum = now.getDay();
    let dayName = '';

    switch (dayNum){
        case 0:
            dayName = 'Sunday';
            break;
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        default:

    }
    day.textContent = dayName

}

let currenttMonth = ()=>{
    const now = new Date();
    let monthNum = now.getMonth();
    let monthName = '';

    switch (monthNum){
        case 0:
            monthName = 'January';
            break;
        case 1:
            monthName = 'February';
            break;
        case 2:
            monthName = 'March';
            break;
        case 3:
            monthName = 'April';
            break;
        case 4:
            monthName = 'May';
            break;
        case 5:
            monthName = 'June';
            break;
        case 6:
            monthName = 'July';
            break;
        case 7:
            monthName = 'August';
            break;
        case 8:
            monthName = 'September';
            break;
        case 9:
            monthName = 'October';
            break;
        case 10:
            monthName = 'November';
            break;
        case 11:
            monthName = 'December';
            break;
        default:
    }
    month.textContent = monthName;    

}

// console.log(new Date().getMonth())




let merdianCorrect = ()=>{
    const now = new Date();
    const hrs = now.getHours()
    if( hrs < 12){
        merdian.textContent = 'AM'
    }else if( hrs >=12){
        merdian.textContent = 'PM'
    }
}

let updateClock = ()=>{
    
}

// updateClock()

currenttMonth()
merdianCorrect()
updateDay()
setInterval(updateTime, 1000)


