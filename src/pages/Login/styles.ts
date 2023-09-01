import { Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;

    :hover {
      font-weight: bold;
    }
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 150px;
  }
`;

export const LoginArea = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

export const TextInput = styled(Input)`
  margin: 5px 0;
`;
export const PasswordInput = styled(Input.Password)`
  margin: 5px 0;
`;

export const OtherLinks = styled.div``;
