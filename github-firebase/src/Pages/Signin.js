import React, { useState, useContext } from "react";
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Row,
  Col,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";
import firebase from "firebase/app";
import { UserContext } from "../Context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
        toast("successfully signed in", {
          type: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        toast("email and password not match", {
          type: "error",
        });
      });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };
  if (context.user?.uid) {
    return <Redirect to="/" />;
  }
  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form onSubmit={handleFormSubmit}>
              <CardHeader className="">Sign In here</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter password "
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" block color="success">
                  Sign In
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
