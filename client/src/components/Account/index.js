import React from 'react';
import "./index.css";

import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import SideMenu from  "../../components/SideMenu";

import AuthUserContext from '../Session/AuthUserContext';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>

              <Container fluid>
      <Row>
      <Col size="md-3">
    <SideMenu />
      </Col>
        <Col size="md-8" className="center">
          <Jumbotron>
            <h1 className="text-center">Reset Your Password</h1>
          </Jumbotron>

          <div className="container-fluid block">
            <h5>Change Password: <i class="glyphicon glyphicon-user"></i> <span> {authUser.email} </span></h5>
            <PasswordChangeForm />
          </div>
       
        </Col>
      </Row>
      </Container>

      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);