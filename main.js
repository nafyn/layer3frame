var document;
fetch('https://api.timezonedb.com/v2.1/get-time-zone?key=KI68ACKYCWJ2&format=json&by=zone&zone=Europe/Paris')
    .then(response => response.json())
    .then(data => {
        const date = new Date(data.timestamp * 1000);
        const options = {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        };
        document.getElementById('date').innerHTML = date.toLocaleDateString('fr-FR', options);
    });

function startTime() {
    const today = new Date();
    const h = today.getHours();
    let m = today.getMinutes();
    let n = today.getSeconds();
    document.getElementById('time').innerHTML =
        h + ":" + m + ":" + n;
    setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    } // add zero in front of numbers < 10
    return i;
}

function meteoUpdate(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=d84fbcb329ab5a29bda98fba46b26108')
        .then(response => response.json())
        .then(data => {
        const weather = new Weather(data.main);
        const options = {

        }
        });
}
function rotateImage() {
    var icon = document.getElementsByClassName("icon")
    icon.style.transform = 'rotate(180deg)';
}

document.addEventListener('DOMContentLoaded', function() {
    startTime();
});

