import {CINEMA_CAROUSEL_REQUEST, CINEMA_CAROUSEL_SUCCESS, CINEMA_CAROUSEL_FAILED} from "./constants";

let initialState = {
    loading: null,
    data: null,
    err: null
}

const cinemaCarouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case CINEMA_CAROUSEL_REQUEST:
            state.loading =  true;
            state.data =  null;
            state.err = null;
            return {...state};
        case CINEMA_CAROUSEL_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return {...state};
        case CINEMA_CAROUSEL_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return {...state};
        default:
            return {...state};
    }
}

export default cinemaCarouselReducer;