import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  width: 762px;
  position: relative;
  margin-inline: auto;
`;

export const InputBar = styled.input`
  background-color: #3939390d;
  width: 100%;
  height: 64px;
  padding-left: 16px;
  border-radius: 16px;
  border: none;
  outline: none;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
`;

export const SearchImage = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
`;
