import React from 'react';
import createClass from 'create-react-class';
import VirtualizedSelect from 'react-virtualized-select';
// import API from "../../utils/API";

const API = require('../../utils/API');

var CitiesField = createClass({
	displayName: 'CitiesField',
	getInitialState () {
		return {			
			mountains: [],
            mtranges: "",
			fourteeners: ""
		};
	},
	updateValue (newValue) {
		this.setState({
			mountains: [],
            mtranges: "",
            fourteeners: ""
		});
	},
	// loadMountains = () => {
	// 	API.getMountains()
	// 	  .then(res =>
	// 		this.setState({ mountains: res.data, mtranges: "", fourteeners: ""})
	// 	  )
	// 	  .catch(err => console.log(err));
	//   },
	render () {
		var options = API.mountains;
		return (
			<div className="section">
				<h3 className="section-heading">Cities (Large Dataset) <a href="https://github.com/JedWatson/react-select/tree/master/examples/src/components/Virtualized.js">(Source)</a></h3>
				<VirtualizedSelect ref="citySelect"
					options={options}
					simpleValue
					clearable
					name="select-city"
					value={this.state.selectValue}
					onChange={this.updateValue}
					searchable
					labelKey="name"
					valueKey="name"
				/>
				<div className="hint">
					Uses <a href="https://github.com/bvaughn/react-virtualized">react-virtualized</a> and <a href="https://github.com/bvaughn/react-virtualized-select/">react-virtualized-select</a> to display a list of the world's 1,000 largest cities.
				</div>
			</div>
		);
	}
});


module.exports = CitiesField;
