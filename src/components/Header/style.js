import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const TitleOne = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  b {
    color: ${({ theme }) => theme.colors.primary.main};
  }
  margin-bottom: 48px;
`;
