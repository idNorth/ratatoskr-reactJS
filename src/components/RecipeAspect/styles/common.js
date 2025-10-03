import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray500};
  }
`;
