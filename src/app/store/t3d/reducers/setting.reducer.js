import * as T3dActions from './../actions';

const initialState = {
    theme: {}
}

const setting = (state = initialState, action) => {
    switch (action.type) {
        case T3dActions.SET_SETTING:
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
}

export default setting;
