import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${({ width, size }) => width || size || 16}px;
  height: ${({ height, size }) => height || size || 19}px;
  color: ${({ theme, color }) => theme?.colors?.[color] || color};
  > svg {
    width: inherit;
    height: inherit;
  }
`;
