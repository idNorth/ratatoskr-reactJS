import styled from "styled-components";

// constants
import { APP_HEADER_HEIGHT } from "constants/app";

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  padding: 0 12px;
  align-items: center;
  height: ${APP_HEADER_HEIGHT}px;
`;
