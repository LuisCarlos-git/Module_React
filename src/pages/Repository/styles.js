import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }to{
    transform: rotate(360deg)
  }
`;

export const Loading = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 50px;
    color: #fff;
  }

  ${({ loading }) =>
    loading &&
    css`
      svg {
        animation: ${rotate} 1s linear infinite;
      }
    `}
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IsssueList = styled.ul`
  padding: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 20px;
    border: 2px solid #7159c1;
  }

  div {
    flex: 1;
    strong {
      font-size: 16px;
      a {
        text-decoration: none;
        color: #222;

        &:hover {
          color: #7159c1;
        }
      }
    }

    p {
      margin-top: 10px;
      color: #666;
    }
  }
`;
