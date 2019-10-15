import {createStore, combineReducers} from "redux";
import AuthOneReducer from '../reducers/AuthOneReducer'



const AllReducer = combineReducers({AuthOneReducer});
const AppStore = createStore(AllReducer);
export default AppStore;
