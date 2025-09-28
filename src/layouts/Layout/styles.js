import styled from "styled-components";

// constants
import { APP_HEADER_HEIGHT, APP_ASIDE_WIDTH } from "constants/app";

export const Body = styled.div`
  display: flex;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
`;

export const Main = styled.main`
  overflow-y: auto;
  height: calc(100vh - ${APP_HEADER_HEIGHT}px);
  width: calc(100vw - ${APP_ASIDE_WIDTH}px);
`;
