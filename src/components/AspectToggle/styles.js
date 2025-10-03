import styled from "styled-components";

export const Wrapper = styled.div`
  gap: 4px;
  display: flex;
  align-items: center;
`;

export const Separator = styled.div`
  width: 1px;
  height: 28px;
  background-color: ${({ theme }) => theme.colors.gray300};
`;
