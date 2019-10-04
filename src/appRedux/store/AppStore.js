import {createStore, combineReducers} from "redux";
import AuthOneReducer from '../reducers/AuthOneReducer'



const Allreducer = combineReducers({AuthOneReducer});
const Appstore = createStore(Allreducer);
export default Appstore;
