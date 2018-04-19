import React, { Component } from "react";
import API from "../../utils/API";
import "./react-select.css";

class DropdownBtn extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
      mountains: [],
      mtranges: "",
      fourteeners: "", 
      value: ""
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.loadMountains();
  }

loadMountains = () => {
    API.getMountains()
      .then(res =>
        this.setState({ mountains: res.data, mtranges: "", fourteeners: ""})
      )
      .catch(err => console.log(err));
  };
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  handleChange(e) {

    this.setState({ value: e.target.value });

    this.props.onChange(e.target.value);
  }

  render() {
    return (
   
      <div className="form-group">
        <label >Select Mountain Range / 14ers (select one):</label>
        <select className="form-control" id="dropdown" ref = {(input)=> this.menu = input} onChange={this.handleChange}>
        {this.state.mountains.map((mountain, index) => (
          <option key={index}  value={mountain.fourteeners} >Mountain Range: {mountain.mtranges} 14ner: {mountain.fourteeners}</option>
        ))}
        </select>
     
      </div>

    
    );
  }
}

export default DropdownBtn;