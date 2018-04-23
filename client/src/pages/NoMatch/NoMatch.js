import React from "react";
import { Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import ThumbnailCustom from "../../components/ThumbnailCustom";

const NoMatch = () => (
  <Container fluid>
  
        <Jumbotron>
          <h1>404 Page Not Found</h1>
        </Jumbotron>

        <ThumbnailCustom >
                    <img src="https://media.giphy.com/media/26tPhNJomQlAbEBy0/giphy.gif" alt="Slip and Fall"/>
        </ThumbnailCustom>
  
  </Container>
);

export default NoMatch;
