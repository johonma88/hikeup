import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import ThumbnailCustom from "../../components/ThumbnailCustom";
import SideMenu from  "../../components/SideMenu";

class MountainsDetail extends Component {
  state = {
    mountain: {}
  };
  // When this component mounts, grab the mountain with the _id of this.props.match.params.id
  // e.g. localhost:3000/mountains/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getMtInfo(this.props.match.params.id)
      .then(res => this.setState({ mountain: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-2">
      <SideMenu />
        </Col>
          <Col size="md-10">
            <Jumbotron>
              <h1>
                Mountain Range: {this.state.mountain.mtranges} <br  />
                Fourteener: {this.state.mountain.fourteeners} 
              </h1>
            </Jumbotron>
            <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Details for {this.state.mountain.mtranges} </h1>
              
            <p><br />
                <h3> Mountain Range: {this.state.mountain.mtranges}</h3> 
                <h3>Fourteener: {this.state.mountain.fourteeners} </h3>
                <h3>Elevation: {this.state.mountain.elevation} </h3>
                <h3>Latitude: {this.state.mountain.lat} Longitude: {this.state.mountain.lon} </h3>
                <h3>Weather:  <a href={this.state.mountain.weather}  target="_blank">Click here to check the weather </a></h3>
              </p>
              <ThumbnailCustom key={this.state.mountain._id}>
                    
                    <img src={this.state.mountain.picture} alt=""/>
                    </ThumbnailCustom>
           </article>
          </Col>
        </Row>
          </Col>
        </Row>
        
        <Row>
          <Col size="md-4">
          <br />
            <Link to="/mtsinfo">← Back to Mountain List</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MountainsDetail;
