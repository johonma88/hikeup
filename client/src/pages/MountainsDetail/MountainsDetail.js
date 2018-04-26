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

  componentDidMount() {
    API.getMtInfo(this.props.match.params.id)
      .then(res => this.setState({ mountain: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-3">
      <SideMenu />
        </Col>
          <Col size="md-8">
            <Jumbotron>
              <h3>
                Mountain Range: {this.state.mountain.mtranges} <br  />
                Fourteener: {this.state.mountain.fourteeners} 
              </h3>
            </Jumbotron>
           
               <div class="thumbnail">
               <ThumbnailCustom key={this.state.mountain._id}>
                <img src={this.state.mountain.picture} alt=""/>
            </ThumbnailCustom>
            <hr/>
                <div class="caption">
                <h3>Details for {this.state.mountain.mtranges} </h3>
                    <p>Mountain Range: {this.state.mountain.mtranges}</p>
                    <p>Fourteener: {this.state.mountain.fourteeners}</p>
                    <p>Elevation: {this.state.mountain.elevation}</p>
                    <p>Latitude: {this.state.mountain.lat} Longitude: {this.state.mountain.lon}</p>
                    <p>Weather:  <a href={this.state.mountain.weather}  target="_blank">Click here to check the weather </a></p>
                    <Link to="/mtsinfo">← Back to Mountain List</Link>
              </div>
              </div>
    
            <Row>
          <Col size="md-10 md-offset-1">

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
