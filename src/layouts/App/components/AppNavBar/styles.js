import styled from "styled-components";

// constants
import { APP_ASIDE_WIDTH } from "constants/app";

export const Wrapper = styled.aside`
  flex: 1;
  width: ${APP_ASIDE_WIDTH}px;
  max-width: ${APP_ASIDE_WIDTH}px;
  box-shadow: 1px 0 5px ${({ theme }) => theme.colors.gray300};
`;

export const Part = styled.div``;

export const Element = styled.div`
  display: flex;
  padding: 4px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;
