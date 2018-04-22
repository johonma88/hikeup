import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import ThumbnailCustom from "../../components/ThumbnailCustom";

const NoMatch = () => (
  <Container fluid>
  
        <Jumbotron>
          <h1>404 Page Not Found</h1>
          {/* <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1> */}
           
        </Jumbotron>
        <ThumbnailCustom >
                    <img src="https://media.giphy.com/media/26tPhNJomQlAbEBy0/giphy.gif" alt=""/>
               </ThumbnailCustom>
  
  </Container>
);

export default NoMatch;
