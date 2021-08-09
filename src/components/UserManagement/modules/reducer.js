import { USER_LIST_FAILED, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_DELETE_FAILED } from "./constants";

const initialState = {
    loading: true,
    data: null,
    err: null,
    errorDelete: null,
};
const userListReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case USER_LIST_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case USER_LIST_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };
        case USER_LIST_DELETE_FAILED:
            state.errorDelete = action.payload;
            return { ...state };
        default: return { ...state }
    }
};

export default userListReducer;