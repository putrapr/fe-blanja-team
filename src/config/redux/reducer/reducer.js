import { combineReducers } from "redux";
import customerReducer from "./customeReducer";
import productReducer from "./productReducer";
import addressReducer from "./addressReducer";

const rootReducer = combineReducers({
  customer: customerReducer,
  address: addressReducer,
  product: productReducer,
});

export default rootReducer;
