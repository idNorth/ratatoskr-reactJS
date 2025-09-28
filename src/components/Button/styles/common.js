import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const CSS = css`
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

export const TagBtn = styled.button`
  ${CSS};
`;

export const TagA = styled.a`
  ${CSS};
`;

export const TagLink = styled(Link)`
  ${CSS};
`;
