import styled from "styled-components";

export const Container = styled.div`
  padding-top: 20px;
  color: var(--NEUTRAL);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  .right {
    display: flex;
    gap: 60px;
    align-items: center;
  }
  .header-menu {
    display: none;
  }
  @media (max-width: 1200px) {
    .right {
      gap: 20px;
    }
  }

  @media (max-width: 850px) {
    padding-top: 15px;
    position: relative;
    .header-menu {
      display: flex;
    }
    .right {
      position: absolute;
      display: flex;
      height: 100vh;
      top: -100vh;
      left: -15px;
      width: 100vw;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      flex-direction: column-reverse;
      justify-content: center;
      gap: 60px;
      display: none;
    }
    .closed {
      display: flex;
      animation: toTop 0.7s forwards;
    }
    .open {
      display: flex;
      animation: toBottom 0.7s forwards;
    }

    @keyframes toBottom {
      0% {
        top: -100vh;
        opacity: 0;
      }
      80% {
        top: 0vh;
      }
      100% {
        top: 0vh;
        opacity: 1;
      }
    }

    @keyframes toTop {
      0% {
        top: 0vh;
        opacity: 1;
      }

      100% {
        opacity: 0;
        top: -100vh;
        display: none;
      }
    }
  }
`;
