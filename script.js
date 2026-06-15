
function updateClock(){
    document.getElementById("clock").innerText =
    new Date().toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
    });
}

updateClock();
setInterval(updateClock,1000);

