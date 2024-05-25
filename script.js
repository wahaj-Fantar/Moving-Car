let position = 0;
let intervalId = null;

function start() {
    if (intervalId === null) { 
        intervalId = setInterval(run, 100);
    }
}

function run() {
    position += 5;
    console.log('Run function called, Position:', position);  
    let x = document.getElementById("car");
    x.style.marginLeft = position + "px";
    console.log('Margin left set to:', x.style.marginLeft);  
}

function stop() {
    if (intervalId !== null) { 
        clearInterval(intervalId);
        intervalId = null; 
    }
}
