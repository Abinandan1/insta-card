import styled from "styled-components";
const Wrapper = styled.div`
  .home-container {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 876px) {
    .home-container {
      grid-template-columns: auto 1fr;
    }
  }
`;

export default Wrapper;
