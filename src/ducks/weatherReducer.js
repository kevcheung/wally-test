import axios from 'axios';

//CONSTANTS
const GET_ZIP = 'GET_ZIP';
const GET_NAME = 'GET_NAME';

//ACTION CREATORS
export function getZip(searchTerm){
    return{
        type: GET_ZIP,
        payload: axios.get(`/api/getZip/${searchTerm}`)
    };
}

export function getName(searchTerm){
    return{
        type: GET_NAME,
        payload: axios.get(`/api/getName/${searchTerm}`)
    };
}

//INITIAL STATE
const initialState = {
    weatherResult: {}
}

//REDUCER
export default function weatherReducer(state = initialState, action) {
    // console.log('PAYLOAD!!!!', action.payload);
    switch(action.type) {
        case `${GET_ZIP}_FULFILLED`:
            return {
                ...state,
                weatherResult: action.payload.data
            }
        case `${GET_NAME}_FULFILLED`:
            return {
                ...state,
                weatherResult: action.payload.data
            }
            default:
        return state;
    }
}