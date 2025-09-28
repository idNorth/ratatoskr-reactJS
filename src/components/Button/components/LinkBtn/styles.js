import styled, { css } from "styled-components";

export const Wrapper = styled.a`
  height: 32px;
  display: flex;
  padding: 0 12px;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.m};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray500};

  ${({ isSelected }) => {
    if (!isSelected) return;
    return css`
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.gray500};
    `;
  }}
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.gray500};
  }
`;
