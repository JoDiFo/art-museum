import { Menu, MenuItem, MenuWrapper } from "./styled";

interface IModalMenuProps {
  onClick: (value: boolean) => void;
}

export function ModalMenu({ onClick }: IModalMenuProps) {
  return (
    <MenuWrapper>
      <Menu onClick={() => onClick(false)}>
        <MenuItem to={"/"}>Home</MenuItem>
        <MenuItem to={"/favorites"}>Favorites</MenuItem>
      </Menu>
    </MenuWrapper>
  );
}
