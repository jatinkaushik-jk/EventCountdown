
const form = document.getElementsByClassName('form')[0];
const days = document.getElementById('days');
const hrs = document.getElementById('hrs');
const mns = document.getElementById('mns');
const ss = document.getElementById('ss');
const eventName = document.getElementById('eventName');
const eventDate = document.getElementById('eventDate');
const eventTime = document.getElementById('eventTime');
const submitBtn = document.getElementById('submitBtn');
const paraH = document.querySelector('.para > h1');


days.value = '00';
hrs.value = '00';
mns.value = '00';
ss.value = '00';
let endDate = '';

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (eventDate.value && eventTime.value) {
        endDate = eventDate.value + ' ' + eventTime.value;
        let nameOfEvent = eventName.value;
        paraH.innerHTML = (nameOfEvent ? `${nameOfEvent} is comming soon... <br> ${eventDate.value + ', ' + eventTime.value} <br>` : `We are comming soon... <br> ${eventDate.value + ', ' + eventTime.value}`);
        form.style.display = 'none';
        setInterval(calcCounts, 1000);
    } else {
        alert('Please Enter Date and Time of the event!')
    }

});


function calcCounts() {
    const end = new Date(endDate);
    const currDate = new Date();


    const milliSec = (end - currDate);
    // difference
    const diff = milliSec / 1000; // Providing Seconds
    // no. of days
    const nd = Math.floor(diff / (24 * 3600));
    days.value = nd;
    // no. of hours
    const h = Math.floor((diff / 3600) % 24);
    hrs.value = h;
    // no. of minutes
    const min = Math.floor((diff / 60) % 60);
    mns.value = min;
    // no. of seconds
    const sec = Math.floor((diff % 60));
    ss.value = sec;

}
