import axios from 'axios';



// const options = {
    //     params: {
        //         bl_latitude: '11.847676',
        //         tr_latitude: '12.838442',
        //         bl_longitude: '109.095887',
//         tr_longitude: '109.149359',

//     },
//     headers: {
//         'X-RapidAPI-Key': 'de25d7de1bmshf6c3e70ebec1aa7p189e6ejsnc340b6fdb9a5',
//         'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//     }
// };

// const headers1 = {
    //     'X-RapidAPI-Key': 'de25d7de1bmshf6c3e70ebec1aa7p189e6ejsnc340b6fdb9a5',
    //     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    // };
    
    // const headers2 = {
        //     'X-RapidAPI-Key': '527cc346e5msh63a1ead2fbfc49fp1ca53ejsn5652e3916a80',
        //     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        // };
        
        
        export const getPlaces = async (type, bounds) => {
            console.log("bounds : ", bounds)
            const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
            try {
                // `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
                // https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary
        const response = await axios.get(URL, {
            params: {
                bl_latitude: bounds.sw.lat,
                tr_latitude: bounds.ne.lat,
                bl_longitude: bounds.sw.lng,
                tr_longitude: bounds.ne.lng,

            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });

        console.log(type, " data : ", response.data);
        return response.data

    } catch (error) {
        console.error(error);
    }
}


// de25d7de1bmshf6c3e70ebec1aa7p189e6ejsnc340b6fdb9a5
export const getWeatherData = async (coordinates) => {
    try {
        const { data } = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
            params: { q: `${coordinates.lat},${coordinates.lng}` },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY,
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        });
        console.log("weather data : ", data);
        return data;
    } catch (error) {
        console.error(error);
    }
}