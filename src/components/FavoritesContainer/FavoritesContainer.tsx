import { SmallCardContainer } from "components/SmallCardContainer";
import { useSelector } from "react-redux";
import { RootState } from "store/reducers/favoritesReducer";

export function FavoritesContainer() {
  const favoritesIds = useSelector(
    (state: RootState) => state.favoritesReducer.favorites,
  );

  console.log(favoritesIds);

  return <SmallCardContainer artworks={[]} />;
}
