import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--NEUTRAL);
  gap: 30px;
  .testimonial-container {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 20px;
  }

  @media (max-width: 850px) {
    padding: 0 15px 0 15px;
    .testimonial-container {
      align-items: center;
      flex-direction: column;
    }
  }
`;
