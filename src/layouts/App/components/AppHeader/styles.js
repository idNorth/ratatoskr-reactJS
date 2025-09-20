import styled from "styled-components";

// constants
import { APP_HEADER_HEIGHT, APP_ASIDE_WIDTH } from "constants/app";

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
`;

export const Header = styled.div`
  flex: 1;
  display: flex;
  padding: 0 12px;
  align-items: center;
  height: ${APP_HEADER_HEIGHT}px;
  box-shadow: 7px 1px 5px ${({ theme }) => theme.colors.gray300};
`;

export const CornerFiller = styled.div`
  width: ${APP_ASIDE_WIDTH}px;
  height: ${APP_HEADER_HEIGHT}px;
`;
