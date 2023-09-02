import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Alert, Button } from "antd";
import React, { useState } from "react";

import { authRoutes } from "../../api";
import logo from "../../assets/logo/logo.png";
import { login } from "../../services/auth";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error and login
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // response api
    const response: any = await authRoutes.login(email, password);

    if (response.errors) {
      setLoading(false);
      setError(response.errors);
    } else {
      const { access_token } = response;

      const user: any = await authRoutes.me(access_token);

      if (user.errors) {
        setLoading(false);
        setError(response.errors);
      } else {
        await login(user, access_token);
      }
    }
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Linkad" title="Linkad" />
      </Logo>
      {error ? <Alert message={error} type="error" /> : null}
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
          <Button
            disabled={loading}
            htmlType="submit"
            type="primary"
            style={{ width: "100%" }}
          >
            {loading ? "Loading..." : "Login"}
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
