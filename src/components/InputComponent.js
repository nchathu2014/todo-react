import React from 'react';

export default class InputComponent extends React.Component{
	render(){
		return(
			<div>
				<div className="form-group">
					<input type="text" 
					       value={this.props.itemInput} 
					       onChange={this.props.itemOnChange}
					       className="form-control cus-input" 
					       maxLength="50"
					       id="inputBox" 
					       ref="inputBox"/>
					<button onClick={this.props.itemAddFunc}>Add</button>
				</div>
			</div>
		);
	}
}

