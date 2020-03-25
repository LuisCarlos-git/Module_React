import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  margin: 80px auto;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  h1 {
    display: flex;
    align-items: center;
    font-size: 20px;
    padding-bottom: 15px;

    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;
