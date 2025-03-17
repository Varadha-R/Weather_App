import react,{useState,useEffect} from "react";
import axios from "axios";
import './Weather.css';
export default function Weather(){
const [data,setData]=useState({})
const [location,setLocation]=useState('')
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1c635ba47bbf6216cd13d0a935f228d2`

    const searchLocation =(event)=>{
        if(event.key==="Enter"){
        axios.get(url).then((response)=>{
            setData(response.data)
            console.log(response.data)
        })
        setLocation('')
    }
    }
    return(
        <>
        <div className="app">
            <div className="search">
                <input type="text"
                value={location} 
                onChange={event=>setLocation(event.target.value)}
                placeholder="Enter Location"
                onKeyPress={searchLocation}/>
            
            </div>
        <div className="container">
        <div className="top">
            <div className="location">
                <p>{data.name}</p>
            </div>
            <div className="temp">
                {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            </div>
            <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> :null}  
            </div>
            <div className="bottom">
                <div className="feels">
                    {data.main ? <p className="bold"> {data.main.feels_like.toFixed()}°F</p> : null }
                    <p className="bold"> Feels Like</p>
                </div>
                <div className="humidity">
                {data.main ? <p className="bold"> {data.main.humidity}%</p> : null }
                    <p className="bold">Humidity</p>
                </div>
                <div className="wind">
                {data.wind? <p className="bold"> {data.wind.speed.toFixed()} MPH</p> : null }
                    <p className="bold">Wind Speed</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}