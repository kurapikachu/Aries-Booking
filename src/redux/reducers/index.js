import { combineReducers } from "redux";
import movieDetailsReducer from "../../containers/GuestLayout/MovieBookingDetails/modules/reducer";
import listNowPlayingReducer from "../../containers/GuestLayout/HomePage/modules/reducers";
import cinemaCarouselReducer from "../../components/CarouselCinema/modules/reducer";
import addGheReducer from "./../../containers/GuestLayout/BookingPage/modules/reducer";
import authReducer from "../../containers/AuthPage/modules/reducer";
import addUserReducer from "../../containers/GuestLayout/UserPage/modules/reducer";
import userListReducer from "../../components/UserManagement/modules/reducer";
import addMovieReducer from "../../components/AddMovie/modules/reducers";
import addAccountReducer from "../../components/AddUser/modules/reducer"
import updateAccountReducer from "../../components/UserEdit/modules/reducer"
import updateMovieReducer from "../../components/MovieEdit/modules/reducer";
import userInfoReducer from "../../components/UserProfile/modules/reducer";


//Create rootReducer to use in store. This manages CHILD REDUCERS in the project
const rootReducer = combineReducers({
  listNowPlayingReducer,
  cinemaCarouselReducer,
  movieDetailsReducer,
  addGheReducer,
  authReducer,
  addUserReducer,
  userListReducer,
  addMovieReducer,
  addAccountReducer,
  updateAccountReducer,
  updateMovieReducer,
  userInfoReducer
});

export default rootReducer;
