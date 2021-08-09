import {MOVIE_DETAILS_FAILED, MOVIE_DETAILS_PAGE_REQUEST, MOVIE_DETAILS_SUCCESS} from "./constants";

let initialState = {
    loading: null,
    data: null,
    err: null
}

const movieDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_DETAILS_PAGE_REQUEST:
            state.loading =  true;
            state.data =  null;
            state.err = null;
            return {...state};
        case MOVIE_DETAILS_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return {...state};
        case MOVIE_DETAILS_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return {...state};
        default:
            return {...state};
    }
}

export default movieDetailsReducer;