import { combineReducers } from "redux";
import customerReducer from "./customeReducer";
import productReducer from "./productReducer";
import addressReducer from "./addressReducer";
import sellerReducer from "./sellerReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  customer: customerReducer,
  address: addressReducer,
  product: productReducer,
  seller: sellerReducer,
  category: categoryReducer,
});

export default rootReducer;
