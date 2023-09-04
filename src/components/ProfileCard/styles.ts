import { Card } from "antd";
import styled from "styled-components";

export const Container = styled(Card)`
  .ant-card-body {
    max-width: 900px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 48px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .btn-area {
      margin-left: 20px;
      button {
        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;
