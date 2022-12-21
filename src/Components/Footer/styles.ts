import styled from "styled-components";

export const Container = styled.footer`
  border-top: 0.696295px solid #30313f;
  padding-top: 30px;
  display: flex;
  color: var(--NEUTRAL);
  padding-bottom: 30px;
  padding-left: 60px;
  padding-right: 60px;
  justify-content: space-between;
  align-items: center;
  .footer-left {
    width: 350px;
    h3 {
      font-size: 100%;
      font-size: 1.5rem;
    }
    p {
      font-size: 0.85rem;
    }
    display: flex;
    flex-direction: column;
    gap: 30px;
    div {
      display: flex;
      align-items: center;
      gap: 50px;
      a {
        color: #ffffff;
        text-decoration: none;
        font-size: 0.85rem;
      }
    }
  }
  .footer-right {
    display: flex;
    gap: 80px;
    summary {
      color: #bdc3ff;
      margin-bottom: 20px;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    ul li a {
      color: #ffffff;
      text-decoration: none;
      font-size: 0.85rem;
      letter-spacing: -0.142424px;
      font-weight: lighter;
    }
  }

  @media (max-width: 1600px) {
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (max-width: 850px) {
    justify-content: left;
    align-items: flex-start;
    flex-direction: column;
    gap: 80px;
    .footer-right {
      flex-wrap: wrap;
    }

    .footer-left {
      width: auto;
    }
  }
`;
