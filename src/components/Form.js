import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchWeather} from '../actions/fetchWeather';
import { Button } from 'reactstrap';
const Form = () =>{
    const dispatch = useDispatch()
    const getweatherInfoAction = (city) => dispatch(fetchWeather(city))

    const [city, setCity] = useState();

    const weatherSelector = useSelector(state => state.weatherInfo)
    console.log("weatherSelector", weatherSelector)

    const getweatherInfo = (e) =>{
        e.preventDefault();
        if(city == ""){
            console.log("No city to search")
        }else{
            getweatherInfoAction(city)
            console.log(city)
        }
    }
    useEffect(()=>{
        getweatherInfoAction("Mohali")
    },[])

    let details = "";
    if(weatherSelector && weatherSelector.hasOwnProperty("name")){
        details = <div className="details" style={{backgroundImage: `url(https://i.pinimg.com/originals/e9/d8/5b/e9d85b500365c9e3b7a5e717a534e07c.jpg)`}}>
            <h4 style={{textAlign:'center'}}><u>Weather Details</u></h4>
            <h3>{weatherSelector.message}</h3>
            <p style={{textAlign:'center'}}>{weatherSelector.name}
            <span style={{textAlign:'center'}}>{weatherSelector.sys.country}</span></p>
            <p style={{textAlign:'center'}}>{weatherSelector.main.temp}°F</p>
            <p style={{textAlign:'center'}}><img src={`http://openweathermap.org/img/w/${weatherSelector.weather[0].icon}.png`}/></p>
        </div>
    }

    return(
        <>
        <form onSubmit={getweatherInfo}>
            <div className="forecast">
            <div className="flex-forecast">
            <h1>Weather-App</h1>
                <input type ="text" name="name" onChange={e => setCity(e.target.value)} placeholder="Enter the city to check weather"/>
            <br></br>
            {/* <input type ="submit" value="Check Weather"/> */}
            <Button type="submit" className="btn btn-success">CHECK WEATHER</Button>
            </div>
            </div>
        </form>
        {details}
        </>


    )
}

export default Form;