function printTime() {
    console.log(new Date().toLocaleTimeString());
}

setInterval(printTime, 1000);