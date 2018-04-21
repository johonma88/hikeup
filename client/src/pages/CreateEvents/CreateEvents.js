import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import DropdownBtn from "../../components/DropdownBtn";
import "../../components/DropdownBtn/DropdownBtn.css";
import SideMenu from  "../../components/SideMenu";
import "./CreateEvents.css";


class CreateEvents extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      events: [],
      title: "",
      description: "",
      fourteeners: "",
      date: "",
      time: "",
      organizer: "",
      meetingPoint: "",
      contactInfo: "",
      url:"",
  
      mountains: [],
      mtranges: "", 
      fourtennerSelected: ""
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChangeFourteener = this.handleInputChangeFourteener.bind(this);
  }

  componentDidMount() {
    this.loadEvents();
    this.loadMountains();
  }

  loadEvents = () => {
    API.getEvents()
      .then(res =>
        this.setState({ events: res.data, title: "", description: "", fourteeners: "", date: "", time: "", organizer:"",meetingPoint:"", contactInfo: "", url:"" })
      )
      .catch(err => console.log(err));
  };

  loadMountains = () => {
    API.getMountains()
      .then(res =>
        this.setState({ mountains: res.data, mtranges: "", fourteeners: ""})
      )
      .catch(err => console.log(err));
  };

  deleteEvent = id => {
    API.deleteEvent(id)
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    console.log(`
     DESCIPTION: ${this.state.description}
     TITLE: ${this.state.title}
    FOURTEENRSELECTED: ${this.state.fourtennerSelected}
    DATE: ${this.state.date}
    TIME: ${this.state.time}
    URL: ${this.state.url}
    `);

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleInputChangeFourteener = value => {

    this.setState({ fourtennerSelected: value });
  
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.description && this.state.fourtennerSelected && this.state.date && this.state.time) {
      API.saveEvent({
        organizer: this.state.organizer,
        contactInfo: this.state.contactInfo,
        title: this.state.title,
        description: this.state.description,
        fourtennerSelected: this.state.fourtennerSelected,
        date: new Date(this.state.date),
        time: this.state.time,
        meetingPoint: this.state.meetingPoint,
        url: this.state.url,
      })
        .then(res => this.loadEvents())
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
            <Jumbotron>
              <h1>Create a HikeUp</h1>
            </Jumbotron>
            <form>
           Organize by: 
            <Input
                id="inputEvent"
                value={this.state.organizer}
                onChange={this.handleInputChange}
                name="organizer"
                placeholder="Your name goes here (required)"
              /> 
              Contact Info: (Email/Phone)  
              <Input
                id="inputEvent"
                value={this.state.contactInfo}
                onChange={this.handleInputChange}
                name="contactInfo"
                placeholder="Contact Info (required)"
              />
               Title of the Event:
              <Input
               id="inputEvent"
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
               Description:
              <Input
               id="inputEvent"
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="description (required)"
              />
              <DropdownBtn 
               id="inputEvent"
                value={this.state.fourteeners}
                onChange={this.handleInputChangeFourteener}
                name="fourteeners"
              />
               When are planning to go hiking:
               <Input type="date"
                id="inputEvent"
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="date (required)"
              />
               What time are you planning to meet:
               <Input type="time"
                id="inputEvent"
                value={this.state.time}
                onChange={this.handleInputChange}
                name="time"
                placeholder="time (required)"
              />
               Where is your meeting point for this event: 
              <Input
               id="inputEvent"
                value={this.state.meetingPoint}
                onChange={this.handleInputChange}
                name="meetingPoint"
                placeholder="meetingPoint (required)"
              />
              URL of a picture for your event: 
                <Input
                 id="inputEvent"
                value={this.state.url}
                onChange={this.handleInputChange}
                name="url"
                placeholder="Url (required)"
              />
              <FormBtn
                disabled={!(this.state.description && this.state.title && this.state.fourtennerSelected && this.state.date && this.state.time)}
                onClick={this.handleFormSubmit}
              >
               HikeItUp!
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateEvents;
