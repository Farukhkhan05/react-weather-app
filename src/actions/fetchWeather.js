export function fetchWeather(city){

    return function (dispatch){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d958001e6a31efdebac4b4104c82843d`)
        .then((response)=>{
            console.log("Response",response)
            return response.json();
        })
        .then((data)=>{
            //dispatch the action
            dispatch({type:"FETCH_WEATHER", payload:data})
            console.log("Data",data)
        })
        .then(err =>{
            console.log("err",err)
        })
    }
}