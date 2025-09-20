import styled from "styled-components";

// constants
import { APP_ASIDE_WIDTH } from "constants/app";

export const Wrapper = styled.aside`
  height: 100%;
  width: ${APP_ASIDE_WIDTH}px;
`;

export const Part = styled.div``;

export const Element = styled.div`
  display: flex;
  padding: 2px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
