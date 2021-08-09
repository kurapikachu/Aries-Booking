import {USER_INFO_FAILED, USER_INFO_REQUEST, USER_INFO_SUCCESS} from "./constants";

let initialState = {
    loading: null,
    data: null,
    err: null
}

const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_INFO_REQUEST:
            state.loading =  true;
            state.data =  null;
            state.err = null;
            return {...state};
        case USER_INFO_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return {...state};
        case USER_INFO_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return {...state};
        default:
            return {...state};
    }
}

export default userInfoReducer;