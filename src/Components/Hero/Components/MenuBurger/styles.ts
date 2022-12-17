import styled from "styled-components";

export const Container = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: flex;
    width: 25px;
    height: 35px;
    position: relative;
    span {
      width: 100%;
      height: 1.2px;
      background-color: var(--NEUTRAL);
      position: absolute;
      transition: 0.2s;
    }
    .line1 {
      top: 40%;
    }
    .line2 {
      top: 60%;
    }
    .line3 {
      top: 80%;
    }

    .closed1 {
      top: 60%;
      transform: rotate(40deg);
    }
    .closed2 {
      height: 2px;

      transform: rotate(40deg);
    }
    .closed3 {
      height: 2px;
      top: 60%;
      transform: rotate(-40deg);
    }
  }
`;
