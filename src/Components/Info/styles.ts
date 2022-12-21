import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--NEUTRAL);
  h2 {
    margin-top: 20px;
    text-align: center;
  }
  .cards-container {
    display: flex;
    gap: 30px;
    margin-top: 60px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
