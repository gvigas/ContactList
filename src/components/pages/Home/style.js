import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputText = styled.input`
  border: none;

  height: 30px;
  border-radius: 12px;
  width: 100%;
  padding: 12px;

  display: flex;
  justify-content: center;
  line-height: 24px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding: 4px;

  strong {
    font-size: 24px;
    color: #222;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    padding: 8px 16px;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;
    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;

      span {
        font-size: 20px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.main};
      }

      img {
        height: 20px;
        width: 20px;
        margin-left: 4px;
      }
    }
  }
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;

  & + & {
    margin-top: 16px;
    color: #3346f0;
  }

  .info {
    display: block;

    .info-name {
      display: flex;
      align-items: start;
      margin-bottom: 4px;
      justify-content: center;
      span {
        font-weight: bold;
        color: #222222;
        font-size: 20px;
        text-transform: uppercase;
        line-height: 18px;
        letter-spacing: 0.5px;
      }

      small {
        text-transform: uppercase;
        background-color: ${({ theme }) => theme.colors.primary.light};
        color: ${({ theme }) => theme.colors.primary.darkMonster};
        margin-left: 8px;
        font-size: 12px;
        padding: 0px 2px;
        letter-spacing: 0.1px;

        border-radius: 4px;
      }
    }
    span {
      display: block;
      color: gray;
      margin-bottom: 2px;
    }
  }

  .actions {
    button {
      border: none;
      background-color: transparent;
    }
    img {
      width: 28px;
      height: 28px;
      transition: all 0.2s ease-in;
    }
    img:hover {
      transform: scale(1.1);
    }
  }
`;
