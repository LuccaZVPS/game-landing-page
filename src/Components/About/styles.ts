import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: var(--NEUTRAL);
  height: auto;
  width: 100%;
  justify-content: center;
  padding: 100px 0 100px 0;
  gap: 40px;
  .left {
    position: relative;

    img {
      width: 600px;
      height: auto;
    }
    ::before {
      content: "";
      position: absolute;
      background: radial-gradient(
        53.49% 53.49% at 50.07% 50%,
        rgba(28, 28, 40, 0) 0%,
        rgba(28, 28, 40, 0.7) 100%
      );
      width: 100%;
      left: 0;
      height: 100%;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 600px;
  }

  .summary-container {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  @media (max-width: 1600px) {
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    .left {
      max-width: 50%;
      img {
        max-width: 100%;
      }
    }
    .right {
      width: 50%;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;
    .left {
      max-width: max-content;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .right {
      width: 100%;
    }
  }
`;
