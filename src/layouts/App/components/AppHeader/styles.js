import styled from "styled-components";

// constants
import { APP_HEADER_HEIGHT } from "constants/app";

export const Wrapper = styled.header`
  width: 100%;
  height: ${APP_HEADER_HEIGHT}px;
  color: ${({ theme }) => theme.main};
`;
