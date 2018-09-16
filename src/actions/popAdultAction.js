import { GET_INDIA_DATA, GET_CHINA_DATA, GET_US_DATA, GET_INDONESIA_DATA } from './types';
import axios from 'axios';

export const getIndPopData = () => dispatch => {
    return axios.get('http://api.population.io:80/1.0/population/2017/India/').then(response => {
      dispatch({ type: GET_INDIA_DATA, indPopData: response.data });
    });
};

export const getChinaPopData = () => dispatch => {
    return axios.get('http://api.population.io:80/1.0/population/2017/China/').then(response => {
      dispatch({ type: GET_CHINA_DATA, chinaPopData: response.data });
    });
};

export const getUSPopData = () => dispatch => {
    return axios.get('http://api.population.io:80/1.0/population/2017/United%20States/').then(response => {
      dispatch({ type: GET_US_DATA, usPopData: response.data });
    });
};

export const getIndoPopData = () => dispatch => {
    return axios.get('http://api.population.io:80/1.0/population/2017/Indonesia/').then(response => {
      dispatch({ type: GET_INDONESIA_DATA, indoPopData: response.data });
    });
};