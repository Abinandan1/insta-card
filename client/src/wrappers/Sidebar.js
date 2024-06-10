import styled from "styled-components";
const Wrapper = styled.aside`
  display: none;
  overflow-y: scroll;
  position: sticky;
  top: 0;
  height: 100vh;
  width: 400px;
  /* padding: 1rem; */
  color: var(--dark-color);
  @media screen and (min-width: 876px) {
    display: block;
  }
`;

export default Wrapper;
