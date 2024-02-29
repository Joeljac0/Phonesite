let day = 0

const weather_container = document.getElementById("weather_container")

weather_container.children[day].classList.remove("hidden")
weather_container.children[day].classList.add("shown")


function next_day() {
    if (day != 5) {
        weather_container.children[day].classList.remove("shown")
        weather_container.children[day].classList.add("hidden")
        day++
        weather_container.children[day].classList.remove("hidden")
        weather_container.children[day].classList.add("shown")
    }
}

function prev_day() {
    if (day != 0) {
        weather_container.children[day].classList.remove("shown")
        weather_container.children[day].classList.add("hidden")
        day--
        weather_container.children[day].classList.remove("hidden")
        weather_container.children[day].classList.add("shown")
    }
}
