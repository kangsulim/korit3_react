import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [ weather, setWeather ] = useState({
    temp: '',
    desc: '',
    icon: ''
  });

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Busan&units=Meric&APIkey=7b426527a4bb6a8d6c2e64a2d421d7e4')
    .then(response => response.json())
    .then(result => {
      setWeather({
        temp: result.main.temp,
        desc: result.weather[0].description,
        icon: result.weather[0].icon,
      })
    })
    .catch(err => console.log(err));
  }, []);

  if (weather.icon) {

    return (
      <>
        <h1>Busan Weather</h1>
        <p>temp: {weather.temp}</p>
        <p>desc: {weather.desc}</p>
        <p>icon: {weather.icon}</p>
        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="날씨아이콘" />
      </>
    )
  } else {
    return(
      <>
        <h1>로딩중</h1>
      </>
    )
  }
}

export default App
