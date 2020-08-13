import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  width: 100%;
  max-width: 100vw;
  margin: 0;
`;

export const Content = styled.div`
  background: #fff;
  color: #131313;
  font-size: 20px;

  width: 250px;
  border-radius: 5px;
  padding: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & div {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;
