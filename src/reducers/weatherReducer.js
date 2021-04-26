const weatherInfo = (state = {
    weatherInfo : {}
},action) =>{
    console.log("action",action)
    
    //check the action type
    if(action.type = "FETCH_WEATHER"){
        console.log("Action",action)
        console.log(state,"dffcdfvcd");
        state = {...state, weatherInfo: action.payload
        }
        return state;
    }
}

export default weatherInfo;