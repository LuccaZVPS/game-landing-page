import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  animation: toRight 0.4s;
  @keyframes toRight {
    0% {
      transform: translateX(-30px);
      transform: translatey(-30px);
    }
    100% {
      transform: translateX(0px);
      transform: translatey(0px);
    }
  }
  img {
    width: 100%;
    height: 250px;
  }
  .txt {
    background: rgba(24, 25, 32, 0.1);
    backdrop-filter: blur(11.2153px);
    padding-top: 10px;
    padding-left: 12px;
    padding-bottom: 10px;
    padding-right: 12px;
    h3 {
      font-size: 0.85rem;
      margin-bottom: 4px;
    }
    h4 {
      font-size: 0.7rem;
      font-weight: 400;
      margin-bottom: 3px;
    }
    .tags {
      display: flex;
      font-size: 0.7rem;
      font-weight: 400;
      gap: 2px;
    }
  }
  .game-bottom {
    display: flex;
    align-items: center;
    flex-flow: row;

    .stars {
      display: flex;
      align-items: center;
      font-size: 0.7rem;
      margin-right: 7px;
      svg {
        font-size: 0.8rem;
        color: #fad241;
      }
    }
    .orders {
      font-size: 0.7rem;
    }
    .button {
      flex: 1;
      display: flex;
      justify-content: right;
      button {
        background-color: var(--ACCENT);
        color: var(--NEUTRAL);
        border-radius: 50px;
        border: none;
        outline: none;
        width: 80px;
        height: 30px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1450px) {
    .txt {
      h3 {
        font-size: 0.83rem;
        margin-bottom: 4px;
      }
      h4 {
        font-size: 0.67rem;
        font-weight: 400;
        margin-bottom: 3px;
      }
      .tags {
        font-size: 0.67rem;
        font-weight: 400;
      }

      .button {
        button {
          width: 70px;
          font-size: 0.75rem;
        }
      }
    }
  }

  @media (max-width: 850px) {
    width: 300px;
    img {
      width: 200px;
    }
  }
`;
