import { Card } from "antd";
import styled from "styled-components";

export const Container = styled(Card)`
  .title {
    font-weight: bold;
    margin-bottom: 15px;
  }

  .see-all {
    padding: 10px 0 0 0;
    margin: 10px 0;
    border-top: 1px solid #00000010;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PeopleComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .text-area {
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      margin-top: -10px;
      padding: 0px;
    }
    small {
      font-size: 10px;
    }
  }

  img {
    width: 48px;
    border-radius: 50%;
  }
`;
