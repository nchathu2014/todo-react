import React from 'react';

export default class Item extends React.Component{

	constructor(props){
		super(props);
		this.state={
			editable:false,
			inputText:this.props.name
		}
		
	}

	_editItem(){
		
		this.setState({
			editable:true
		})
	}

	_renderDisplay(){

		return(
			<div className="list-item">
				<span>{this.state.inputText}</span>
				<span className="pull-right">
					<button className="btn"  onClick={this._editItem.bind(this)}>
						<span className="glyphicon glyphicon-pencil"></span>
					</button>&nbsp;
					<button className="btn"  onClick={this.props.removeItem}>
						<span className="glyphicon glyphicon-remove"></span>
					</button>
				</span>
			</div>
		);
	}

	_close(){
		this.setState({
			editable:false
		})
		this.setState({
			inputText:this.props.name
		})
	}

	_onChange(event){
		this.setState({
			inputText:event.target.value
		})
	}

	_saveItem(){
		this.setState({
			editable:false
		})
	}

	_renderEditDisplay(){
		return(
			<div className="list-item">
			
				<span><input  ref="inputBox" 
				              type="text"
				              className="editTextBox"
				              value={this.state.inputText} 
							  onChange={this._onChange.bind(this)}
							  /></span>
			    <span className="pull-right">				  
				<button className="btn"  onClick={this._saveItem.bind(this)}>
					<span className="glyphicon glyphicon-floppy-saved"></span>
				</button>&nbsp;
				<button className="btn"  onClick={this._close.bind(this)}>
					<span className="glyphicon glyphicon-menu-left"></span>
				</button></span>
			</div>
		);
	}
	render(){
       if(this.state.editable){
       		return this._renderEditDisplay();
       }else{
       		return this._renderDisplay();
       }
		
	}
}





