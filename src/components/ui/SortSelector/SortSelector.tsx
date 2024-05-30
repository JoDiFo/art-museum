import { SelectorWrapper } from "./styled";

interface ISortSelectorProps {
  sortOptions: { value: string; text: string }[];
  selected: string;
  onSelect: (value: string) => void;
}

export function SortSelector({
  sortOptions,
  selected,
  onSelect,
}: ISortSelectorProps) {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <SelectorWrapper>
      <select
        name="sortSelect"
        id="sortSelect"
        value={selected}
        onChange={handleSelect}
      >
        {sortOptions.map((sortOption) => (
          <option value={sortOption.value} key={sortOption.value}>
            {sortOption.text}
          </option>
        ))}
      </select>
    </SelectorWrapper>
  );
}
