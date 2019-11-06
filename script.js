const body = document.body
const main = () => {
    console.log('Working')
    let base = 'http://api.weatherstack.com/current'
    let accessKey = 'f074902008123e1dc9ba3a42becabb30'
    let location = 'New York'
    const getCurrentWeather = async() => {
        let response = await axios.get(`${base}?access_key=${accessKey}&query=${location}&units=f`)
        weatherData = response.data
        console.log(weatherData)
        let info = weatherData.current
        let weatherlocation = weatherData.location.region
        insertElement(info.weather_icons, 'img', null)
        insertElement(info.temperature, 'p', 'Temp')
        insertElement(info.humidity, 'p', 'Humidity')
        insertElement(info.weather_descriptions, 'p', 'Description')
        insertElement(weatherlocation, 'p', 'Location')
        
    }
    function insertElement(element, tag, labelName) {
        if (tag === 'img'){
            widget = document.querySelector('.widget')
            let number = document.createElement(tag)
            let div = document.createElement('div')
            div.classList.add('field')
            number.setAttribute('src', element)
            div.setAttribute('id','icon')
            div.appendChild(number)
            widget.appendChild(div)
        }
        else {
            widget = document.querySelector('.widget')
            let number = document.createElement(tag)
            let label = document.createElement('label')
            let div = document.createElement('div')
            div.classList.add('field')
            label.innerHTML = labelName
            number.innerHTML = element
            div.appendChild(label)
            div.appendChild(number)
            widget.appendChild(div)
        }
    }
    getCurrentWeather()
}
window.onload = main()
