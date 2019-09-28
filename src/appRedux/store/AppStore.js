import {createStore, combineReducers} from "redux";
import UserLoginReducer from '../reducers/UserLoginReducer';
import UserSignupReducer from '../reducers/UserSignupReducer';


const Allreducer = combineReducers({UserLoginReducer,UserSignupReducer});
const Appstore = createStore(Allreducer);
export default Appstore;
