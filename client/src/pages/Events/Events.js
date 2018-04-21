import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import "../../components/DropdownBtn/DropdownBtn.css";
import SideMenu from  "../../components/SideMenu";
import './Events.css'


class Events extends Component {

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
        this.setState({ events: res.data, title: "", description: "", fourteeners: "", date: "", time: "" })
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
    ORGANIZER: ${this.state.organizer}
    CONTACTINFO: ${this.state.contactInfo}
     DESCIPTION: ${this.state.description}
     TITLE: ${this.state.title}
    FOURTEENRSELECTED: ${this.state.fourtennerSelected}
    DATE: ${this.state.date}
    TIME: ${this.state.time}
    MEETINGPOINT: ${this.state.meetingPoint}
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
    if  (this.state.organizer && this.state.contactInfo && this.state.title && this.state.description && this.state.fourtennerSelected && this.state.date && this.state.time && this.state.meetingPoint) {
      API.saveEvent({
        organizer: this.state.organizer,
        contactInfo: this.state.contactInfo,
        title: this.state.title,
        description: this.state.description,
        fourtennerSelected: this.state.fourtennerSelected,
        date: this.state.date,
        time: this.state.time,
        meetingPoint: this.state.meetingPoint
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
              <Row>
            
            <SideMenu /><br /><br /><br /><br /><br /><br /><br /><br />
          
            </Row>
         
        </Col>
          <Col size="md-8">
            <Jumbotron className="shadow">
              <h1 className="center">Events</h1>

            </Jumbotron>

          <Row>
            {this.state.events.length ? (
              <List>
                {this.state.events.map(event => (
                  <ListItem key={event._id}>
                  
                      <strong>
                        {event.title}   to {event.fourtennerSelected}
                      </strong>
                      <Link to={"/events/" + event._id}>    More Details ->
                    </Link>
                    <DeleteBtn onClick={() => this.deleteEvent(event._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            
          </Row>
          </Col>
        </Row>
      </Container>


    );
  }
}

export default Events;
