let day = 0

const weather_container = document.getElementById("weather_container")

weather_container.children[day].classList.add("shown")


function change_day(amount) {

    weather_container.children[day].classList.remove("shown")
    day += amount
    weather_container.children[day].classList.add("shown")

}
