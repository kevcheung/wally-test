import axios from 'axios';

//CONSTANTS
const GET_WALLS = 'GET_WALLS';

//ACTION CREATORS
export function getWalls() {
    return{
        type: GET_WALLS,
        payload: axios.get('/api/getWalls')
    };
}

//INITIAL STATE
const initialState = {
    walls: []
}

//REDUCER
export default function unsplashReducer(state = initialState, action) {
    // console.log('PAYLOAD!!!!', action.payload);
    switch(action.type) {
        case `${GET_WALLS}_FULFILLED`:
        return {
            ...state,
            walls: action.payload.data
        }
        default:
        return state;
    }
}