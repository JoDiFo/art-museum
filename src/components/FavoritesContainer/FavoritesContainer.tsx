import { PageLoader } from "components/PageLoader";
import { SmallCardContainer } from "components/SmallCardContainer";
import { useSelector } from "react-redux";
import { RootState } from "store/reducers/favoritesReducer";
import useQueryMultiple from "utils/hooks/useQueryMultiple";

export function FavoritesContainer() {
  const favoritesIds = useSelector(
    (state: RootState) => state.favoritesReducer.favorites,
  );

  const { loading, error, data } = useQueryMultiple(favoritesIds);

  console.log(favoritesIds);

  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    <p>Nothing</p>;
  }

  return <SmallCardContainer artworks={data ?? []} />;
}
