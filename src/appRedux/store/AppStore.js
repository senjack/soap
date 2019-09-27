import { createStore } from "redux";
import sampleReducer from '../reducers/SampleReducer'
import AppState from '../state/AppState'


const AppStore = createStore(sampleReducer, AppState);
export default AppStore;
