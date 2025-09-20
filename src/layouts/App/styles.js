import styled from "styled-components";

// constants
import { APP_HEADER_HEIGHT, APP_ASIDE_WIDTH } from "constants/app";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-width: 360px;
  min-height: 100vh;
`;

export const Body = styled.div`
  display: flex;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
`;

export const Content = styled.main`
  height: calc(100vh - ${APP_HEADER_HEIGHT}px);
  width: calc(100vw - ${APP_ASIDE_WIDTH}px);
  overflow-y: auto;
`;

export const Content2 = styled.div`
  height: 4000px;
`;
