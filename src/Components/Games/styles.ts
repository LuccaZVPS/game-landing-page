import background from "../../Assets/hero1.png";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color: var(--NEUTRAL);
  padding-top: 30px;
  padding-bottom: 30px;
  min-height: 100vh;
  h2 {
    text-align: center;
  }
  .games-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    z-index: 20;
  }
  .filters {
    display: flex;
    margin-top: 30px;
    margin-bottom: 50px;
    gap: 20px;
    div {
      padding: 10px;
      border-radius: 50px;
      cursor: pointer;
    }
    .clicked {
      transition: 0.2s;
      background-color: var(--ACCENT);
    }
  }
  .games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    justify-items: center;
    gap: 50px;
    width: 1000px;
  }
  .games-background {
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: linear-gradient(
      180deg,
      #1c1c28 0%,
      rgba(28, 28, 40, 0.8) 20.31%,
      rgba(28, 28, 40, 0.7) 33.85%,
      rgba(28, 28, 40, 0) 100%
    );
  }

  @media (max-width: 1450px) {
    .games-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, 200px);
      justify-content: center;
      gap: 50px;
      width: 100%;
      padding-left: 140px;
      padding-right: 140px;
    }
  }

  @media (max-width: 850px) {
    min-height: auto;

    .games-grid {
      display: flex;
      padding-left: 20px;
      padding-right: 0px;
      justify-content: flex-start;
      overflow: auto;
      gap: 20px;
    }
    .filters {
      font-size: 0.8rem;
    }
  }
`;
