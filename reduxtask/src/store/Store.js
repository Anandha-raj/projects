import { createStore } from "redux";
import CardReducer from "../reducers/CardReducer";

const store = createStore(CardReducer);

export default store;