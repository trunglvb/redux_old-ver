import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer, //lang nghe thau hieu tong hop
  initialState, //trang thai ban dau
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

//rat loang ngoang nhung ap dung cho hau nhu moi app co su dung redux
