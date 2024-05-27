import { combineReducers } from "redux";

interface IFavoritesState {
  favorites: number[];
}

const initialState: IFavoritesState = {
  favorites: [],
};

interface IAction<T> {
  type: "ADD_ARTWORK" | "REMOVE_ARTWORK";
  payload: T;
}

const favoritesReducer = (
  state = initialState,
  action: IAction<number>,
): IFavoritesState => {
  switch (action.type) {
    case "ADD_ARTWORK":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_ARTWORK":
      return {
        ...state,
        favorites: state.favorites.filter(
          (addedId) => addedId !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  favoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
