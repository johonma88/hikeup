import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import SideMenu from  "../../components/SideMenu";

class Detail extends Component {
  state = {
    event: {},
    date: new Date(),
  };

 
  // When this component mounts, grab the mountain with the _id of this.props.match.params.id
  // e.g. localhost:3000/mountains/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getEvent(this.props.match.params.id)
      .then(res => this.setState({ event: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-2">
      <SideMenu />
        </Col>
          <Col size="md-10 centered">
            <Jumbotron>
              <h1>{this.state.event.title}</h1>
            </Jumbotron>


            <Jumbotron>
          <Row>
          <Col size="md-3">
  
        </Col>
          <Col size="md-8 centered">   
          <Col size="md-5"> 
              <h3>Description:</h3>
              <p>{this.state.event.description}</p>
              <h3>Mountain:</h3>
              <p>{this.state.event.fourtennerSelected}</p>
              <h3>Time/ Date:</h3>
              <p>{this.state.event.date} at  {this.state.event.time}</p>
          </Col>

          <Col size="md-5"> 
              <h3>Contact Info:</h3>
              <p>Organizer:{this.state.event.organizer}</p>
              <h3>Phone/Email:</h3>
              <p>{this.state.event.contactInfo}</p>
              <h3>Meeting Point:</h3>
              <p>{this.state.event.meetingPoint}</p>
             
          </Col>
          </Col>
          </Row>
        </Jumbotron>
       

          </Col>
      </Row>

       
        
        <Row>
          <Col size="md-2">
            <Link to="/events">← Back to Events</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
