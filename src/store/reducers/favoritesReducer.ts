import { combineReducers } from "redux";

interface IFavoritesState {
  favorites: number[];
}

const initialState: IFavoritesState = {
  favorites: [],
};

interface IAddArtworkAction {
  type: "ADD_ARTWORK";
  payload: number;
}

interface IRemoveArtworkAction {
  type: "REMOVE_ARTWORK";
  payload: number;
}

interface ISetArtworksAction {
  type: "SET_ARTWORKS";
  payload: number[];
}

type IAction = IAddArtworkAction | IRemoveArtworkAction | ISetArtworksAction;

const favoritesReducer = (
  state = initialState,
  action: IAction,
): IFavoritesState => {
  switch (action.type) {
    case "ADD_ARTWORK": {
      const newState = {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

      localStorage.setItem("favorites", newState.favorites.toString());
      return newState;
    }
    case "REMOVE_ARTWORK": {
      const newState = {
        ...state,
        favorites: state.favorites.filter(
          (addedId) => addedId !== action.payload,
        ),
      };

      localStorage.setItem("favorites", newState.favorites.toString());
      return newState;
    }
    case "SET_ARTWORKS":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  favoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
