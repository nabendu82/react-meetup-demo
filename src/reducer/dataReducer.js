import * as types from '../actions/types';

const initialState = {
    indPopData: [],
    chinaPopData: [],
    usPopData:[],
    indoPopData:[]
  };

  const dataReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case types.GET_INDIA_DATA:
        newState = { ...state, indPopData: action.indPopData };
        break;
      case types.GET_CHINA_DATA:
        newState = { ...state, chinaPopData: action.chinaPopData };
        break;
      case types.GET_US_DATA:
        newState = { ...state, usPopData: action.usPopData };
        break;
      case types.GET_INDONESIA_DATA:
        newState = { ...state, indoPopData: action.indoPopData };
        break;
      default:
        newState = state;
    }
    return newState;
  };
  
  export default dataReducer;
