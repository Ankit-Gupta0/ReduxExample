import { combineReducers } from "redux";
import {itemsRed, itemsReducer} from './postReducer';

export default combineReducers({
    posts: itemsReducer,
    any: itemsRed

});