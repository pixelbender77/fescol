let valueDisplay = document.querySelectorAll(".num");
let interval = 5000;
//console.log(valueDisplay); // debug line to check all existing num elements in documentv

valueDisplay.forEach(valueDisplay => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    //console.log(endValue); // debug line to print all the end values
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue + '%';
        if (startValue == endValue) {
            clearInterval(counter);

        }


    }, duration);
})