import {ADD_ACCOUNT_REQUEST, ADD_ACCOUNT_SUCCESS, ADD_ACCOUNT_FAILED} from "./constants";

let initialState = {
    loading: true,
    data: null,
    err: null
};
const addAccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACCOUNT_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return {...state};
        case ADD_ACCOUNT_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return {...state};
        case ADD_ACCOUNT_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return {...state};

        default:
            return {...state}
    }

}

export default addAccountReducer;