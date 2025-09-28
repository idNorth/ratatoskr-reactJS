import styled from "styled-components";
import { Link } from "react-router-dom";

// constants
import { APP_ASIDE_WIDTH } from "constants/app";

export const Wrapper = styled.aside`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: ${APP_ASIDE_WIDTH}px;
  justify-content: space-between;
  max-width: ${APP_ASIDE_WIDTH}px;
  box-shadow: 1px 0 5px ${({ theme }) => theme.colors.gray300};
`;

export const Part = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Element = styled(Link)`
  display: flex;
  padding: 4px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &: hover {
    cursor: pointer;
  }
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;
