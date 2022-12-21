import styled from "styled-components";
import img from "../../Assets/hero2.png";
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  .hero-content {
    padding: 0 60px 0 60px;
    position: absolute;
    left: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(360deg, #1c1c28 0%, rgba(28, 28, 40, 0) 77.78%);
    z-index: 100;
    display: flex;
    flex-direction: column;
    flex-flow: column;
  }

  .hero-content-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--NEUTRAL);
    font-family: Gotham;
    font-weight: 300;
    z-index: 100;

    h1 {
      margin-top: 20px;
      font-size: 3rem;
      text-align: center;
    }
    button {
      margin-top: 30px;
    }
  }
  .hero-background {
    position: absolute;
    left: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      360deg,
      rgba(28, 28, 40, 0.8) 0%,
      rgba(28, 28, 40, 0) 77.78%
    );
    transform: rotate(-180deg);
    z-index: 50;
  }

  @media (max-width: 1600px) {
    .hero-content-text {
      h1 {
        font-size: 2.5rem;
      }
      button {
        margin-top: 25px;
      }
    }
  }

  @media (max-width: 1200px) {
    .hero-content {
      padding: 0 30px 0 30px;
    }

    .hero-content-text {
      h1 {
        margin-top: 10px;
        font-size: 2.2rem;
      }
    }
  }

  @media (max-width: 1200px) {
    .hero-content {
      padding: 0 15px 0 15px;
    }
  }

  @media (max-width: 850px) {
    .hero-content {
      padding: 0 15px 0 15px;
    }
    .hero-content-text {
      h1 {
        margin-top: 10px;
        font-size: 1.4rem;
        br {
          display: none;
        }
      }
    }
  }
`;
