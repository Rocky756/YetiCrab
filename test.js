const time = new Date('2021-08-28T13:46:00');
console.log(time);
const hours = `${time.getHours()}:`;
const minutes = `${time.getMinutes()} `;
const day = `${time.getDate()}.`;
const month = (time.getMonth()+1) > 9 ? `${time.getMonth()+1}` : `0${time.getMonth()+1}.`;
const year = `${time.getFullYear()}`;
const showTime = day + month + year + ', время: ' + hours + minutes;
console.log(showTime);

