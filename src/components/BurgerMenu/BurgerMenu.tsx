import { LeftHalf, Menu, MenuItem, RightHalf } from "./styled";

interface IBurgerMenuProps {
  isActive: boolean;
  onClick: () => void;
}

export function BurgerMenu({ isActive, onClick }: IBurgerMenuProps) {
  return (
    <Menu onClick={onClick}>
      {!isActive ? (
        <>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
        </>
      ) : (
        <>
          <LeftHalf></LeftHalf>
          <RightHalf></RightHalf>
        </>
      )}
    </Menu>
  );
}
