import React from 'react';
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import SideMenu from  "../../components/SideMenu";
import "../../Main.css";

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
        <Col size="md-8">
          <Jumbotron>
            
            <h1 className="text-center">Reset Your Password</h1>
          </Jumbotron>
          <div className="container-fluid">
            <h5>Change Password: {authUser.email}</h5>
            
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