const express = require('express')
const app = express()
const port = 3000
const request = require("request")
app.use(express.static('public'))

app.set("view engine", "pug")

const apikey = "24fc9de25ca249bb1efee11667db8631"
let city = "ostersund"
let lat = "63.1793655"
let lon = "14.6357061"
let limit = "5"
let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`
let urll = `http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=${limit}&appid=${apikey}`

let weather
let temperatureList = [[],[],[],[],[],[]]
let timeList = [[],[],[],[],[],[]]
let day = 0
let dayCount = 0

request (url, function (err, respones, body) {
  if (err){
    console.log("error", err)
  }
  else {
    weather = JSON.parse(body)
    console.log(weather["list"][0]["main"])

  day = weather["list"][0]["dt_txt"].slice(8,10)

  for (i = 0; i < weather["list"].length; i++){
    if(day == weather["list"][i]["dt_txt"].slice(8,10)){
      temperatureList[dayCount].push(Math.round((weather["list"][i]["main"]["temp"] - 273.15) * 10) /10)
      timeList[dayCount].push(weather["list"][i]["dt_txt"])
    }
    else {
      dayCount += 1
      day = weather["list"][i]["dt_txt"].slice(8,10)
      temperatureList[dayCount].push(Math.round((weather["list"][i]["main"]["temp"] - 273.15) * 10) /10)
      timeList[dayCount].push(weather["list"][i]["dt_txt"])
    }
  }}
})



app.get("/", (req, res) => {
  res.render("index", {"temperatureList": temperatureList, "timeList": timeList})
  console.log(temperatureList)
})

/*
app.get('/', (req, res) => {
  res.render("index", {title: "Hey", message: "hello there"})
})
*/

app.listen(port, () => {
  console.log(`balks ${port}`)
})

