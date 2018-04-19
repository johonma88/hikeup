import React, { Component } from "react";
import "./DropdownBtn.css";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { DropdownList, DropdownListItem } from "../../components/DropdownList";
import Select from 'react-select';
// import './react-select.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class DropdownBtn extends Component {
    // constructor(props) {
    //     super(props);
        state = {
            dropOpen: false,
            mountains: [],
            mtranges: "",
            fourteeners: ""
        };

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
    
    handleDropOpen() {
        const currentState = this.state;
        this.setState({...currentState, dropOpen: !this.state.dropOpen});
    }
    
    render(){
        // const { mountains } = this.props;
        return (
    <div onClick={this.handleDropOpen.bind(this)} className={`dropdown ${this.state.dropOpen ? 'open': ''}`}>
      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Mountain Ranges & 14ers <span className="caret"></span>
      </button>
      {this.state.mountains.length ? (
              <DropdownList>
                {this.state.mountains.map(mountain => (
                  <DropdownListItem key={mountain._id}>
                    <ul to={"/mountains/" + mountain._id}>
                      <strong>
                        Mountain Range: {mountain.mtranges} <br /> 14ner: {mountain.fourteeners}
                      </strong>
                    </ul>
                   
                  </DropdownListItem>
                ))}
              </DropdownList>
            ) : (
              <h3>No Results to Display</h3>
            )}
    </div>


)};



}

export default DropdownBtn;


 