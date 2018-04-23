import React from 'react';
import 'react-responsive-modal/lib/react-responsive-modal.css';
import Modal from 'react-responsive-modal/lib/css';
import API from "../../utils/API";
import ThumbnailCustom from "../../components/ThumbnailCustom";

export default class App extends React.Component {
  state = {
    open: false,
    mountain: {},
  };

  onOpenModal = () => {
    this.setState({ open: true });
   
        API.getMtInfo(this.props.id)
          .then(res => this.setState({ mountain: res.data }))
          .catch(err => console.log(err));
      
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="example">
        <button className="btn btn-action" onClick={this.onOpenModal}>
          More Details ->
        </button>{' '}
      
        <Modal open={open} onClose={this.onCloseModal} little key={this.state.mountain._id}>
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
           
       </div>
       </div>
        </Modal>
      </div>
    );
  }
}