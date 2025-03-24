/**
 * Write your challenge solution here
 */

function setNumbers(){
const clock = document.getElementsByClassName("clock");
for (let i = 1; i <= 12; i++) {
    let numberVar = document.createElement("div");

    let spanVar =  document.createElement("span");
        numberVar.classList.add("number");
            
        // numberVar.style.transform = `rotate(${i*30}deg)`
        numberVar.style = `--rotation: ${i*30}deg;`
        spanVar.innerText = i;
        numberVar.appendChild(spanVar)
        clock[0].appendChild(numberVar)
    }
}
setNumbers()


function setHourHand(hour){
    let hourHand= document.getElementsByClassName('hour')
    hourHand[0].style = `rotate : ${hour*30}deg`
}
function setMinuteHand(minute){
    let minuteHand= document.getElementsByClassName('minute')
    minuteHand[0].style = `rotate : ${minute*6}deg`
}
function setSecondsHand(seconds){
    let secondHand= document.getElementsByClassName('second')
    secondHand[0].style = `rotate : ${seconds*6}deg`
}
function padTwoDigits(value){
    console.log(value)
    value = Number(value)
    if (value <=9)
    {return `0${value}`}
    return `${value}`
}


let DayStruct={
    0:"Sunday",
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday"
}
const monthStruct = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
};


dateElem = document.getElementsByClassName('date')[0]
digitalClock = document.getElementsByClassName('digital-clock')[0]
timer = setInterval(()=>{
    let dateNow = new Date()
    let currentHour = dateNow.getHours()
    currentHour = covertToTwelve(currentHour)
    let currentMinute = dateNow.getMinutes()
    let currentSecond = dateNow.getSeconds()
    let currentDay = dateNow.getDay()
    let currentDate = dateNow.getDate()
    let currentMonth = dateNow.getMonth()
    let currentYear = dateNow.getFullYear()

    digitalClock.innerText =`${padTwoDigits(currentHour)}:${padTwoDigits(currentMinute)}:${padTwoDigits(currentSecond)}`
    dateElem.innerText = `${DayStruct[currentDay]} ${currentDate} ${monthStruct[currentMonth]} ${currentYear}`

    setHourHand(currentHour)
    setMinuteHand(currentMinute)
    setSecondsHand(currentSecond)

},1000)


function covertToTwelve(hour){
    return hour % 12
}