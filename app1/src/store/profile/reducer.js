import {PROFCHECKBOX} from './action';

const initialState = {
    trueCheck: false,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFCHECKBOX: {
            return {
                trueCheck: state.trueCheck,
            }
        }
        default: {
            return state;
          }
    }
}

export default profileReducer;
