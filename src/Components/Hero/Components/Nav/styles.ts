import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  display: flex;
  gap: 28px;
  li a {
    text-decoration: none;
    color: var(--NEUTRAL);
    transition: 0.2s;
    :hover {
      color: var(--ACCENT);
    }
  }
  @media (max-width: 1450px) {
    li a {
      font-size: 0.95rem;
    }
  }
  @media (max-width: 1200px) {
    li a {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 850px) {
    flex-direction: column;
    text-align: center;
  }
`;
