import React from "react"
// var React = require('react');

class List extends React.Component{
	constructor(props){
		super(props)
		this.state={value: "M"}
	}

	changeSelect(e){
		this.setState({value: e.target.value()})
	}

	render(){
		return(
			<div>
				<select onChange={this.changeSelect.bind(this)} value={this.state.value}>
					<option value="A">Appple</option>
					<option value="B">Banana</option>
					<option value="M">Manggo</option>
		        </select>
		     </div>			
			)

	}
}

export default List;