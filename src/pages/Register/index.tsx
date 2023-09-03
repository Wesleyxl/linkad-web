/* eslint-disable multiline-ternary */
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Alert, Button } from "antd";
import React, { useState } from "react";

import { authRoutes } from "../../api";
import logo from "../../assets/logo/logo.png";
import {
  Container,
  LoginArea,
  Logo,
  OtherLinks,
  PasswordInput,
  TextInput,
} from "./styles";

interface ErrorMessage {
  title: string;
  message: string;
}

const Register: React.FC = () => {
  // inputs states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // error, loading and success
  const [error, setError] = useState<ErrorMessage[] | undefined>();
  const [loading, setLoading] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    setLoading(true);
    setPasswordConfirmError(false);
    setError(undefined);

    if (password !== passwordConfirm) {
      setLoading(false);
      setPasswordConfirmError(true);
    } else {
      // response api
      const response: any = await authRoutes.register(name, email, password);

      if (response.errors) {
        setLoading(false);
        setError(response.errors);
      } else {
        setSuccess(true);
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      }
    }
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Linkad" title="Linkad" />
      </Logo>
      <LoginArea>
        {error ? (
          <Alert message="Error: Verify the fields" type="error" />
        ) : null}
        {success ? (
          <Alert message="User successfully registered" type="success" />
        ) : null}
        <h3 style={{ alignSelf: "start", margin: "10px 0" }}>
          Register as a new user
        </h3>
        <form onSubmit={handleSubmit}>
          <TextInput
            status={error?.some((e) => e.title === "name") ? "error" : ""}
            id="name"
            name="name"
            placeholder="Full name"
            prefix={<UserOutlined />}
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          {error?.some((e) => e.title === "name") ? (
            <div style={{ margin: "-5px 0 10px 0" }}>
              <small style={{ color: "red" }}>
                {error?.some((e) => (e.title === "name" ? e.message : ""))}
              </small>
            </div>
          ) : null}
          <TextInput
            status={error?.some((e) => e.title === "email") ? "error" : ""}
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
            status={error?.some((e) => e.title === "password") ? "error" : ""}
            id="password"
            name="password"
            placeholder="You Password"
            prefix={<LockOutlined />}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <PasswordInput
            status={passwordConfirmError ? "error" : ""}
            id="password-confirm"
            name="password-confirm"
            placeholder="Confirm your Password"
            prefix={<LockOutlined />}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
            value={passwordConfirm}
          />
          {passwordConfirmError ? (
            <div style={{ margin: "-5px 0 10px 0" }}>
              <small style={{ color: "red" }}>Passwords do not match</small>
            </div>
          ) : null}

          <Button
            disabled={loading}
            htmlType="submit"
            type="primary"
            style={{ width: "100%" }}
          >
            {loading ? "Loading..." : "Login"}
          </Button>

          <OtherLinks>
            <p style={{ margin: "15px 0", textAlign: "end" }}>
              <small>
                do you have an account? <a href="/login">Login</a>
              </small>
            </p>

            <p style={{ margin: "15px 0" }}>
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

export default Register;
