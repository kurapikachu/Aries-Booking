let initialState = {
    loading: false,
    data: null,
    error: null,
    errorMovieDelete: null
}

const listNowPlayingReducer = (state  = initialState, action) => {
    switch (action.type) {
        case "listNowPlayingReducer/REQUEST":
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state};
        case "listNowPlayingReducer/SUCCESS":
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return {...state};
        case "listNowPlayingReducer/FAILED":
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return {...state};
        case "listNowPlayingReducer/DELETE_FAILED":
            state.errorMovieDelete = action.payload;
            return {...state}
        default: return {...state};
    }
};


export default listNowPlayingReducer;