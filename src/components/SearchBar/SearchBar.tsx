import SearchIcon from "assets/search-icon.svg";
import { InputBar, SearchBarWrapper, SearchImage } from "./styled";
import { useEffect, useState } from "react";
import useDebounce from "utils/hooks/useDebounce";

interface ISearchBarProps {
  setSearchString: (value: string) => void;
}

export function SearchBar({ setSearchString }: ISearchBarProps) {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const debounceValue = useDebounce(value, 500);

  useEffect(() => {
    setSearchString(debounceValue);
  }, [debounceValue]);

  return (
    <SearchBarWrapper>
      <InputBar
        type="text"
        placeholder="Search art, artist, work..."
        value={value}
        onChange={handleInputChange}
      />
      <SearchImage>
        <SearchIcon />
      </SearchImage>
    </SearchBarWrapper>
  );
}
