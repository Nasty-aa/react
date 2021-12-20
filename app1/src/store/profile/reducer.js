import {PROFCHECKBOX} from './action';

const initialState = {
    trueCheck: false,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFCHECKBOX: {
            console.log(state.trueCheck);
            return {
                trueCheck: !state.trueCheck,
            }
        }
        default: {
            return state;
          }
    }
}

export default profileReducer;
