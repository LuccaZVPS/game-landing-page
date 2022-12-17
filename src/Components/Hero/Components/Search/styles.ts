import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 35px;
  padding-top: 3px;
  padding-bottom: 3px;
  background-color: var(--NEUTRAL);
  border-radius: 50px;
  display: flex;
  align-items: center;
  input {
    width: 167px;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 50px;
    padding-left: 20px;
  }
  button {
    border: none;
    cursor: pointer;
    background: linear-gradient(267.28deg, #7b61ff 24%, #aa82ff 73.95%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: var(--NEUTRAL);
    }
  }
  @media (max-width: 1200px) {
    width: 170px;
    height: 30px;
    input {
      width: 141px;
    }
    button {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 850px) {
    width: 80%;
    justify-content: space-between;
    padding-right: 2px;
    input {
      width: 80%;
    }
  }
`;
