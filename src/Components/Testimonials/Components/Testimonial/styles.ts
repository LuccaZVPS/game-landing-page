import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  background: #292945;
  border-radius: 7px;
  padding-top: 19px;
  padding-left: 16px;
  padding-bottom: 18px;
  padding-right: 16px;
  color: var(--NEUTRAL);
  width: 400px;
  display: flex;
  .testimonial-left {
    width: 200px;
  }
  .testimonial-right {
    position: relative;
    display: flex;
    align-items: center;
    img {
      position: absolute;
    }
  }
  .testimonial-stars {
    display: flex;
    margin-bottom: 5px;
    svg {
      color: yellow;
    }
  }
  .testimonial-text {
    color: #fefefe;
    font-weight: 400;
    font-size: 0.85rem;
    font-weight: lighter;
    margin-bottom: 15px;
  }
  .testimonial-content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    h3 {
      font-weight: 400;
    }
    p {
      color: #9ba5fe;
      font-size: 0.85rem;
    }
  }
  @media (max-width: 850px) {
    width: 100%;
    .testimonial-left {
      width: 50%;
    }
    .testimonial-right {
      width: 50%;
      justify-content: center;
      img {
        position: absolute;
      }
    }

    .testimonial-content {
      h3 {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 500px) {
    .testimonial-left {
      width: 100%;
    }
    .testimonial-right {
      display: none;
    }
  }
`;
