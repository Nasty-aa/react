import {SET_ERROR, SET_LOADING, SET_DATA} from './action';

const initialState = {
    isErorr: false,
    isLoading: false,
    data: []
};

export const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING: {
            return {... state, isLoading: action.payload};
        }
        
        case SET_ERROR: {
            return {... state, isErorr: action.payload};
        }

        case SET_DATA: {
            return {... state, data: action.payload};
        }

        default: {
            return state;
        }
    }
};