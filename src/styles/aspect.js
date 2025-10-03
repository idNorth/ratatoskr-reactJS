import styled, { css } from "styled-components";

// constatns
import { ASPECT_KEYS } from "constants/aspects";

const gridCSS = css`
  grid-template-columns: repeat(4, 1fr);
`;

const rowCSS = css`
  grid-template-columns: 1fr;
`;

const aspectCSS = {
  [ASPECT_KEYS.card]: gridCSS,
  [ASPECT_KEYS.row]: rowCSS,
};

export const AspectsWrapper = styled.div`
  gap: 12px;
  display: grid;
  ${({ variant }) => aspectCSS[variant]}
`;
