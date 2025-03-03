import styled from "styled-components";
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: grid;
  place-items: center;
  z-index: 2;
  .loading {
    border-radius: 50%;
    border: 4px solid var(--primary-50);
    width: 5rem;
    height: 5rem;
    border-top-color: var(--primary-500);
    animation: 0.7s loading infinite linear;
  }

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
    0% {
      border-top-color: var(--primary-800);
    }
    25% {
      border-top-color: var(--primary-500);
    }
    50% {
      border-top-color: var(--primary-200);
    }
    75% {
      border-top-color: var(--primary-800);
    }
  }
`;

export default Wrapper;
