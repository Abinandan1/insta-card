import styled from "styled-components";
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: grid;
  place-items: center;
  z-index: 2;
  .loading {
    border-radius: 50%;
    border: 4px solid var(--light-color);
    width: 5rem;
    height: 5rem;
    border-top-color: var(--primary-color);
    animation: 1s loading infinite linear;
  }

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
    0% {
      border-top-color: var(--primary-color);
    }
    25% {
      border-top-color: var(--secondary-color);
    }
    50% {
      border-top-color: var(--gray-color-500);
    }
    75% {
      border-top-color: var(--dark-color);
    }
  }
`;

export default Wrapper;
