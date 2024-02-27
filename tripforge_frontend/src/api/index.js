import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


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


export const getPlaces = async (bounds) => {
    console.log("bounds : ", bounds)
    try {
        const response = await axios.get(URL, {
            params: {
                bl_latitude: bounds.sw.lat,
                tr_latitude: bounds.ne.lat,
                bl_longitude: bounds.sw.lng,
                tr_longitude: bounds.ne.lng,

            },
            headers: {
                'X-RapidAPI-Key': 'de25d7de1bmshf6c3e70ebec1aa7p189e6ejsnc340b6fdb9a5',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });

        console.log(response.data);
        return response.data

    } catch (error) {
        console.error(error);
    }
}