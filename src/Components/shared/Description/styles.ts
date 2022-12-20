import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  color: var(--NEUTRAL);
  ::before {
    position: absolute;
    left: -50px;
    content: "";
    background-color: var(--NEUTRAL);
    width: 35px;
    height: 1.5px;
  }
  ::after {
    position: absolute;
    right: -50px;
    content: "";
    background-color: var(--NEUTRAL);
    width: 35px;
    height: 1.5px;
  }

  @media (max-width: 1600px) {
    font-size: 0.9rem;
    ::before {
      left: -40px;
      width: 30px;
      height: 1.5px;
    }
    ::after {
      right: -40px;
      width: 30px;
      height: 1.5px;
    }
  }
  @media (max-width: 1200px) {
    font-size: 0.8rem;
    font-weight: bold;
    ::before {
      left: -40px;
      width: 30px;
      height: 2px;
    }
    ::after {
      right: -40px;
      width: 30px;
      height: 2px;
    }
  }
  @media (max-width: 850px) {
    font-size: 0.75rem;
    font-weight: bold;
    ::before {
      left: -30px;
      width: 25px;
      height: 2px;
    }
    ::after {
      right: -30px;
      width: 25px;
      height: 2px;
    }
  }
`;
