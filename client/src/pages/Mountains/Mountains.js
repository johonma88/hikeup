import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import "../../components/DropdownBtn/DropdownBtn.css";
import SideMenu from  "../../components/SideMenu";
import Modal from  "../../components/Modal/Modal";
import "./Mountains.css";

class Mountains extends Component {

  state = {
    mtsinfo: [],
    mtranges: "",
    fourteeners: "",
    elevation: "",
    lat: "",
    lon: "",
    weather: "",
    show: false
  };


  componentDidMount() {
    this.loadMtsInfo();
  }

  loadMtsInfo = () => {
    API.getMtsInfo()
      .then(res =>
        this.setState({ mtsinfo: res.data, mtranges: "", fourteeners: "", elevation: "", lat: "",lon: "", weather: ""})
      )
      .catch(err => console.log(err));
  };

  deleteMtInfo = id => {
    API.deleteMtInfo(id)
      .then(res => this.loadMtsInfo())
      .catch(err => console.log(err));
  };

  handleInputChange = mtinfo => {
    const { name, value } = mtinfo.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = mtinfo => {
    mtinfo.preventDefault();
    if (this.state.mtranges && this.state.fourteeners) {
      API.saveMtInfo({
        mtranges: this.state.mtranges,
        fourteeners: this.state.fourteeners,
        elevation: this.state.elevation,
        lat: this.state.lat,
        lon: this.state.lon,
        weather: this.state.weather
      })
        .then(res => this.loadMtsInfo())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-3">
      <SideMenu />
        </Col>
          <Col size="md-8">
       
            <Jumbotron >
        
                <h1>14ers List</h1>
              </Jumbotron>  
       
            <div id="list">

            {this.state.mtsinfo.length ? (
              <List>
                {this.state.mtsinfo.map(mtinfo => (
                  <ListItem key={mtinfo._id}>
                     
                    <div class="caption mtInf">
                      <h4>Mountain Range: </h4>
                      <h3><span>{mtinfo.mtranges}</span></h3> <br />
                      <h4> 14ner: </h4> 
                      <h3><span>{mtinfo.fourteeners}</span></h3> <br />
                      <p>
                      <Modal id={mtinfo._id} />
                      </p>
                    </div>
                
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Mountains;
