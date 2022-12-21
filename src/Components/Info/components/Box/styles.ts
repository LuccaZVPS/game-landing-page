import styled from "styled-components";
interface props {
  color: string;
}
export const Container = styled.div<props>`
  background: #20202e;
  box-shadow: inset 0px 1.39259px 0px #fc61ff;
  position: relative;
  padding-top: 150px;
  width: 300px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 35px;
  max-width: 90%;
  img {
    width: fit-content;
    height: auto;
  }
  h3 {
    font-size: 1rem;
    color: #dee1ff;
  }
  div {
    background: #57576a;
    border: 1.24028px solid #20202e;
    padding-left: 25px;
    padding: 10px;
    width: 250px;
  }
  ::before {
    width: 100%;
    height: 1px;
    ${({ color }) => color}
    content: "";
    position: absolute;
    top: 0;
    left: 0;
  }
  img,
  p {
    margin-left: 25px;
    color: #dee1ff;
  }
  p {
    font-size: 0.9rem;
  }
`;
