import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #fff;

  nav {
    width: 100%;
    height: 100%;
    max-width: 1300px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .navigation {
      ul {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        li {
          list-style: none;
          margin: 0 10px;
        }
      }
    }
  }
`;
