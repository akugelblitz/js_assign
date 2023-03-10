// const GEO_API = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=";
// const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=";
const ICON_API = "http://openweathermap.org/img/w/"
let CITY = "";
const API_KEY = "5eda134df2e71f89fdbbcadfe1cedae2";
async function getCoords(city){
    try{
        // console.log(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`);
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
        let json = await response.json();
        return {lat: json[0]["lat"], lon: json[0]["lon"]};
    }
    catch(err){
        console.log(err);
    }    
}


// getData()
async function getWeatherData(city){
    // let city = "London";
    let coords = await getCoords(city);
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords["lat"]}&lon=${coords["lon"]}&appid=${API_KEY}`)
        let json = await response.json();
        console.log(json)
        return json;
    
    }
    catch(err){
        console.log(err);
    }
    
}



const searchBar = document.getElementById('search_bar')
const searchInput = document.getElementById('search_input')
const searchClear = document.getElementById('search_clear')
const searchIcon = document.getElementById('search_icon')

// console.log(searchIcon)

function searchBarAnimation(el){
    el.addEventListener("mouseenter", function(){
        // console.log('hello')
        searchClear.classList.remove("search_clear_hidden")
        searchIcon.classList.add("search_icon_highlight")
        searchIcon.classList.remove("search_icon_default")
    })
    
    el.addEventListener("mouseleave", function(){
        // console.log()
        searchClear.classList.add("search_clear_hidden")
        searchIcon.classList.remove("search_icon_highlight")
        searchIcon.classList.add("search_icon_default")
    })
}

searchBarAnimation(searchBar)
searchBarAnimation(searchIcon)

searchBar.addEventListener('submit', function(event){
    event.preventDefault();
})

searchClear.addEventListener("click", function(){
    searchInput.value = "";
})

searchIcon.addEventListener("click", submitHandler)
async function submitHandler(e){
    CITY = searchInput.value;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let data = await getWeatherData(CITY)
    console.log(data["clouds"])
    let date_time = document.getElementById("colored_text")
    let location = document.getElementById("location")
    let pic = document.getElementById("pic")
    let temp = document.getElementById("temp")
    let bold = document.getElementById("bold")
    let _1 = document.getElementById("1")
    let _2 = document.getElementById("2")
    let _3 = document.getElementById("3")
    let _4 = document.getElementById("4")
    let _5 = document.getElementById("5")
    let _6 = document.getElementById("6")

    let vis = parseFloat(data["visibility"])
    vis = vis/1000
    let a_temp = (parseFloat(data["main"]["temp"])-273.15).toFixed(1)
    let f_temp = (parseFloat(data["main"]["feels_like"])-273.15).toFixed(1)
    let max_temp = (parseFloat(data["main"]["temp_min"])-273.15).toFixed(1)
    let min_temp = (parseFloat(data["main"]["temp_max"])-273.15).toFixed(1)
    const d = new Date()

    pic.src = `${ICON_API}${data["weather"][0]["icon"]}.png`
    temp.innerText = `${a_temp}°C`
    bold.innerText = `Feels like ${f_temp}°C. ${data["weather"][0]["main"]}. ${data["weather"][0]["description"]}`
    date_time.innerText = `${months[d.getMonth()]} ${d.getDate()},`
    date_time.innerText += ` ${d.getHours()}:${d.getMinutes()}`
    location.innerText = `${data["name"]}, ${data["sys"]["country"]}`
    
    _1.innerText = `Wind speed: ${data["wind"]["speed"]}m/s`
    _2.innerText = `Pressure: ${data["main"]["pressure"]}hPa`
    _3.innerText = `Humidity: ${data["main"]["humidity"]}%`
    _5.innerText = `Visibility: ${vis}km`
    _4.innerText = `Max temp: ${max_temp}°C`
    _6.innerText = `Min temp: ${min_temp}°C`
    console.log(data["main"]["temp"])
    console.log(data["main"]["feels_like"])
    console.log(data["main"]["temp_min"])
    console.log(data["main"]["temp_max"])
    console.log(data["main"]["pressure"])
    console.log(data["main"]["humidity"])
    console.log(data["wind"]["speed"])
    console.log(data["visibility"])
}


