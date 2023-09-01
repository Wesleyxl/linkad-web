import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

import logo from "../../assets/logo/logo.png";
import {
  Container,
  LoginArea,
  Logo,
  OtherLinks,
  PasswordInput,
  TextInput,
} from "./styles";

const Login: React.FC = () => {
  // inputs states
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Linkad" title="Linkad" />
      </Logo>
      <LoginArea>
        <form onSubmit={handleSubmit}>
          <TextInput
            id="email"
            name="email"
            placeholder="Your Email"
            prefix={<UserOutlined />}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <PasswordInput
            id="password"
            name="password"
            placeholder="You Password"
            prefix={<LockOutlined />}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <p style={{ margin: "10px 0" }}>
            <small>
              Forgot your password? <a href="/forgot-password">Reset</a>
            </small>
          </p>
          <Button htmlType="submit" type="primary" style={{ width: "100%" }}>
            Login
          </Button>

          <OtherLinks>
            <p style={{ margin: "10px 0", textAlign: "end" }}>
              <small>
                Not a member yet? <a href="/register">Register</a>
              </small>
            </p>

            <p style={{ margin: "10px 0" }}>
              <small>
                &copy;2023 Linkedin clone by
                <a
                  style={{
                    marginLeft: "5px",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "blue",
                  }}
                  href="https://wesley-alves.com"
                >
                  Wesley Alves
                </a>
              </small>
            </p>
          </OtherLinks>
        </form>
      </LoginArea>
    </Container>
  );
};

export default Login;
