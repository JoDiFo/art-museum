import { createStore } from "redux";
import { rootReducer } from "./reducers/favoritesReducer";

export function configureStore() {
  const store = createStore(rootReducer);

  return store;
}
