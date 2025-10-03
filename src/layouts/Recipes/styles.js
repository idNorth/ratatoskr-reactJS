import styled from "styled-components";

// constants
import { APP_ASIDE_WIDTH } from "constants/app";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-height: 100%;
  overflow: hidden;
  min-width: 360px;
  min-height: 100vh;
`;

export const Main = styled.main`
  height: 100vh;
  overflow-y: auto;
  width: calc(100vw - ${APP_ASIDE_WIDTH}px);
`;
