import Create from "./Create/Create";
import Edit from "./Edit/Edit"
import Home from "./Home/Home";
import Profile from "./PersonProfile/PersonProfile";
import Search from "./Search/Search";
import Setting from "./Setting/Setting";
import Data from "./Data";
import FavoriteList from "./FavoriteList/FavoriteList";
import SortList from "./SortList/SortList";
import Header from "./Header/Header";
import PersonProfile from "./PersonProfile/PersonProfile"
import Family from "./Family/Family"
import Friend from "./Friend/Friend"
import Work from "./Work/Work"
import PersonContextProvider,{PersonContext} from "./Context/PersonContext";
import NewPersonContextProvider,{NewPersonContext} from "./Context/NewPersonContext";
import FilterProvider,{Filter} from "./Context/FilterContext";
import Reducer from "./Reducer"
import { LightTheme,DarkTheme } from "./Theme";

export {
  Create,
  Edit,
  Home,
  Profile,
  Search,
  Setting,
  FavoriteList,
  SortList,
  Header,
  PersonProfile,
  Family,
  Friend,
  Work,
  Data,
  PersonContextProvider,
  PersonContext,
  NewPersonContextProvider,
  NewPersonContext,
  FilterProvider,
  Filter,
  Reducer,
  LightTheme,
  DarkTheme
};
