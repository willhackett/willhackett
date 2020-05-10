import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: calc(100vh - 10rem);
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 4rem;
  @media screen and (min-width: 600px) {
    padding: 5rem 6rem;
  }
  @media screen and (min-width: 992px) {
    padding: 5rem 8rem;
  }
`;

export default Container;
