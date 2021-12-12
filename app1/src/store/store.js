import { createStore } from 'redux';


const initialState = {
    trueCheck: false,
}

export const profileCheckbox = "profileCheckbox";



export const checkboxReducer =(state = initialState, action) => {
    switch (action.type) {
        case profileCheckbox: {
            if(state.trueCheck == false){
                return {
                    trueCheck: true,
                }
            } else {
                return {
                    trueCheck: false,
                }
            }
        }
        default: {
            return state;
          }
    }
}

export const store = createStore(checkboxReducer);
