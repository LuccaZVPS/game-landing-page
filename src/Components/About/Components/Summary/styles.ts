import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  h3 {
    font-size: 1rem;
  }
  p {
    color: #dee1ff;
    font-weight: 400;
    font-size: 0.9rem;
  }
  .summary-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .summary-img {
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #30313f;
  }

  @media (max-width: 1600px) {
    h3 {
      font-size: 0.85rem;
    }
    p {
      font-size: 0.8rem;
    }

    .summary-img {
      img {
        width: 18px;
      }

      background-color: #30313f;
    }
  }
`;
