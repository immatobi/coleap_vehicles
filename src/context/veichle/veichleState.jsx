import React, { useReducer, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import storage from '../../components/helpers/storage';
import loader from '../../components/helpers/MainLoader'
import Ip from '../../components/helpers/Ip';

import VeichleContext from './veichleContext';
import VeichleReducer from './veichleReducer';



import {
    GET_VEICHLES,
    SET_VEICHLE,
    SET_LOADING
 } from '../types';



 const VeichleState = (props) => {

    const history = useNavigate();
    Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    const baseApiUrl = 'https://6157228e8f7ea600179850e4.mockapi.io/api'

    const initialState = {
        veichles: [],
        veichle: {},
        loading: false
    }

    const [state, dispatch] = useReducer(VeichleReducer, initialState);

    const configX = {
        headers: {
            ContentType: 'application/json'
        }
    }

    const getVeichles = async () => {

        setLoading();

        await Axios.get(`${process.env.REACT_APP_API_URL || baseApiUrl}/vehicles`)
        .then((resp) => {

            dispatch({
                type: GET_VEICHLES,
                payload: resp.data
            })

        }).catch((err) => {

            console.log(`Could not get Vehicles ${err}`);

        })

    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    return <VeichleContext.Provider
            value={{
                veichles: state.veichles,
                veichle: state.veichle,
                loading: state.loading,
                getVeichles
            }}>
        {props.children}
        
    </VeichleContext.Provider>

 }

 export default VeichleState;
 