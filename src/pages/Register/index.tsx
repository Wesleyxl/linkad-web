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

const Register: React.FC = () => {
  // inputs states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // error, loading and success
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    // response api
    const response: any = await authRoutes.register(name, email, password);

    console.log(response);

    // if (response.errors) {
    //   setLoading(false);
    //   setError(response.errors);
    // } else {
    //   setSuccess(true);
    //   setTimeout(function () {
    //     window.location.href = "/login";
    //   }, 5000);
    // }
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Linkad" title="Linkad" />
      </Logo>
      {error ? <Alert message={"message error aqui "} type="error" /> : null}
      {success ? (
        <Alert message="User created successfully" type="success" />
      ) : null}
      <LoginArea>
        <h3 style={{ alignSelf: "start", marginBottom: 10 }}>
          Register as a new user
        </h3>
        <form onSubmit={handleSubmit}>
          <TextInput
            id="name"
            name="name"
            placeholder="Full name"
            prefix={<UserOutlined />}
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
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
          <PasswordInput
            id="password-confirm"
            name="password-confirm"
            placeholder="Confirm your Password"
            prefix={<LockOutlined />}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
            value={passwordConfirm}
          />

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
