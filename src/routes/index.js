import HomePage from "./../containers/GuestLayout/HomePage";
import MovieBookingDetails from "../containers/GuestLayout/MovieBookingDetails/MovieBookingDetails";
import BookingPage from "../containers/GuestLayout/BookingPage";
import AuthPage from "../containers/AuthPage";
import UserPage from "../containers/GuestLayout/UserPage";
import DashBoard from "../containers/AdminLayout/DashBoard"
import MovieManagement from "../components/MovieManagement/movie-management";
import UserManagement from "../components/UserManagement/user-management";
import AddMovie from "../components/AddMovie/AddMovie";
import AddUser from "../components/AddUser";
import UserProfile from "../components/UserProfile/UserProfile";
import CinemaDetails from "../containers/GuestLayout/CinemaDetails/CinemaDetails";

const routesAdmin = [
  {
    exact: true,
    path: "/dashboard",
    component: DashBoard,
  },
  {
    exact: true,
    path: "/dashboard/user",
    component: UserManagement,
  },
  {
    exact: true,
    path: "/dashboard/movie",
    component: MovieManagement,
  },
  {
    exact: true,
    path: "/dashboard/add-movie",
    component: AddMovie,
  },
  {
    exact: true,
    path: "/dashboard/add-user",
    component: AddUser,
  },
];

const routesGuest = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/movie/:id",
    component: MovieBookingDetails,
  },
  {
    exact: false,
    path: "/cinema/:id",
    component: CinemaDetails
  },
  {
    exact: false,
    path: "/booking/:id",
    component: BookingPage,
  },
  {
    exact: true,
    path: "/profile",
    component: UserProfile,
  }

];
const routesLogin = [
  {
    exact: true,
    path: "/login",
    component: AuthPage,
  },
  {
    exact: false,
    path: "/signUp",
    component: UserPage,
  },
];

const routesUser = [];
export { routesAdmin, routesGuest, routesLogin, routesUser };
