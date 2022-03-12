import {
    GET_VEICHLES,
    SET_VEICHLE,
    SET_LOADING
 } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {

    switch(action.type){

        case GET_VEICHLES: 
            return {
                ...state,
                veichles: action.payload,
                loading: false
            }
        case SET_VEICHLE: 
            return {
                ...state,
                veichle: action.payload,
                loading: false
            }
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            }
        default: 
            return state;
    }

}