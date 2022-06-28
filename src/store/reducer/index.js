import { combineReducers } from "redux"; //lay ra tat ca nhung cai Reducer
import todosReducer from "./todosReducer";

//ket hop lang nghe va thau hieu thanh mot bo phan chung
const rootReducer = combineReducers({
  myTodos: todosReducer, //myTodos dua vao tring state cua store
});

export default rootReducer;
