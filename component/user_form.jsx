"use_strict";
import React from "react";
import List from "./list"

class UserForm extends React.Component{
	render(){
		return(
			<div>
			<form onSubmit={this.handleSubmit} >
				<List />
			<button type="button" onClick={this.handleSubmit}>Submit</button>
			</form>
			</div>
			)
	}
}

export default UserForm;