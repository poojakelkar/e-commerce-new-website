import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Container,
  CreateAc,
  Form,
  Heading,
  Input,
  LinkForget,
  RememberContainer,
  Wrapper,
} from "./styles";
import { toast } from "react-toastify";
import { VisibilityOff } from "@material-ui/icons";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  console.log({ formData });
  const loginUser = () => {
    if (formData.username === "pooja" && formData.password === "pooja@123") {
      navigate("/");
    } else {
      toast.error("Incorrect Username or Password");
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <Container>
      <Wrapper>
        <Heading>Login</Heading>
        <Form>
          <Input
            placeholder="pooja"
            onChange={(event) => {
              const value = event.target.value;
              setFormData({
                ...formData,
                username: value,
              });
            }}
          ></Input>

          <Input
            type={passwordShown ? "text" : "password"}
            placeholder="pooja@123"
            onChange={(event) => {
              const value = event.target.value;
              setFormData({
                ...formData,
                password: value,
              });
            }}
          ></Input>
          <VisibilityOff
            style={{ marginTop: "1.5rem" }}
            onClick={togglePassword}
            className="visibility"
          ></VisibilityOff>

          <RememberContainer>
            <Checkbox />
            REMEMBER ME!
          </RememberContainer>
          <CreateAc>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "teal" }}
            >
              CREATE NEW ACCOUNT
            </Link>
          </CreateAc>

          <Button onClick={loginUser}>LOGIN</Button>
          <Link
            to="/forgot-password"
            style={{ textDecoration: "none", color: "teal" }}
          >
            <LinkForget>FORGET PASSWORD</LinkForget>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
