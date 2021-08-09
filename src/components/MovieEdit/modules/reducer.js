import {UPDATE_MOVIE_REQUEST, UPDATE_MOVIE_SUCCESS, UPDATE_MOVIE_FAILED} from "./constants";

let initialState = {
    loading: true,
    err: null,
    data: null
}

const updateMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MOVIE_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return {...state};
        case UPDATE_MOVIE_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return {...state};
        case UPDATE_MOVIE_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return {...state};
        default:
            return {...state}
    }
}

export default updateMovieReducer;