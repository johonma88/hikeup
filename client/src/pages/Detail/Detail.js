import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import SideMenu from  "../../components/SideMenu";
import ThumbnailCustom from "../../components/ThumbnailCustom";

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
        <Col size="md-3">
      <SideMenu />
        </Col>
          <Col size="md-8 centered">
            <Jumbotron>
              <h1>{this.state.event.title}</h1>
            </Jumbotron>


            <div className="container">
          <Row>
          <Col size="md-8">
  
        </Col>
          
          <Col size="md-6"> 
              
             <h4> <strong id="tag">Description: </strong> {this.state.event.description}</h4>
             <h4> <strong id="tag">Mountain: </strong> {this.state.event.fourtennerSelected}</h4>
             <h4> <strong id="tag">Time/ Date:</strong> {this.state.event.date} at  {this.state.event.time}</h4>
            
          </Col>

          <Col size="md-6"> 
          <h4> <strong id="tag">Contact Info: </strong> {this.state.event.organizer}</h4>
          <h4> <strong id="tag">Phone/Email: </strong> {this.state.event.contactInfo}</h4>
          <h4> <strong id="tag">Meeting Point: </strong> {this.state.event.meetingPoint}</h4>  
          </Col>
              <ThumbnailCustom key={this.state.event._id}>
                    
                    <img src={this.state.event.url} alt=""/>
                    </ThumbnailCustom>
          
        
          </Row>
       </div>
       

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
