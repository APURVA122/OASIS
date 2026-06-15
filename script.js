// Clock

function updateClock() {
    document.getElementById("clock").innerText =
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
}

updateClock();
setInterval(updateClock, 1000);

// Windows

const projectsWindow = document.getElementById("projectsWindow");
const aboutWindow = document.getElementById("aboutWindow");

// My Computer

document.getElementById("computerIcon").addEventListener("click", () => {
    location.reload();
});

// Projects

document.getElementById("projectsIcon").addEventListener("click", () => {
    projectsWindow.style.display = "block";
});

// About

document.getElementById("aboutIcon").addEventListener("click", () => {
    aboutWindow.style.display = "block";
});

// Close Buttons

function closeProjects() {
    projectsWindow.style.display = "none";
}

function closeAbout() {
    aboutWindow.style.display = "none";
}