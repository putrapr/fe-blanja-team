import { combineReducers } from "redux";
import customerReducer from "./customeReducer";
import productReducer from "./productReducer";
import addressReducer from "./addressReducer";
import sellerReducer from "./sellerReducer";
import categoryReducer from "./categoryReducer";
import myBagReducer from "./myBagReducer";
import OrderReducer from "./OrderReducer";

const rootReducer = combineReducers({
  customer: customerReducer,
  address: addressReducer,
  product: productReducer,
  seller: sellerReducer,
  category: categoryReducer,
  myBag: myBagReducer,
  order: OrderReducer
});

export default rootReducer;
