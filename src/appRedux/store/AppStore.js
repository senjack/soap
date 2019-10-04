import {createStore, combineReducers} from "redux";
import Appstate from '../state/AppState';
import UserLoginReducer from '../reducers/UserLoginReducer';
import UserSignupReducer from '../reducers/UserSignupReducer';


const Allreducer = combineReducers({UserLoginReducer,UserSignupReducer});
const Appstore = createStore(Allreducer);
export default Appstore;
