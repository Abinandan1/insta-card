import styled from "styled-components";
const Wrapper = styled.section`
  padding: 2rem 0;
  .content-container {
    width: 90%;
    margin: 0 auto;
    display: grid;
    justify-content: center;
  }
  .description {
    font-size: 1.25rem;
    padding: 1.5rem 2rem;
    line-height: 1.25;
    box-shadow: var(--shadow-3);
    background: var(--primary-500);
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    max-width: 500px;
    color: var(--white-color);
  }
  /* .download-preview {
    background: var(--light-color);
    padding: 1rem;
    display: grid;
    gap: 1rem;
  }
  canvas {
    box-shadow: var(--shadow-3);
  } */
  @media screen and (min-width: 876px) {
    section:nth-child(3) {
      display: none;
    }
    .description {
      line-height: 1.5;
    }
  }
`;

export default Wrapper;
