import SearchIcon from "assets/search-icon.svg";
import { InputBar, SearchBarWrapper, SearchImage } from "./styled";

export function SearchBar() {
  return (
    <SearchBarWrapper>
      <InputBar type="text" placeholder="Search art, artist, work..." />
      <SearchImage>
        <SearchIcon />
      </SearchImage>
    </SearchBarWrapper>
  );
}
