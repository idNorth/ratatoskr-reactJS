import styled from "styled-components";

export const Wrapper = styled.div``;

export const Text = styled.h1`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
