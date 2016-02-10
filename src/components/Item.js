import React from 'react';

export default class Item extends React.Component{

	constructor(props){
		super(props);
		this.state={
			editable:false,
			inputText:this.props.name,
			visibility:'none'
		}
		
	}

	render(){
		return (this.state.editable) ? this._renderEditDisplay() : this._renderDisplay()	
	}

	_editItem(){		
		this.setState({
			editable:true
		})
	}

	_onMouseOver(){
		this.setState({
			visibility:'inline'
		})
	}

	_onMouseOut(){
		this.setState({
			visibility:'none'
		})
	}

	_renderDisplay(){

		return(
			<div className="list-item" 
			     onMouseOver={this._onMouseOver.bind(this)} 
				 onMouseOut={this._onMouseOut.bind(this)}>
				<span>{this.state.inputText}</span>
				<span className="pull-right btn-group" style={{display:this.state.visibility}} ref="btn-group">
					<button className="btn"  onClick={this._editItem.bind(this)}>
						<span className="glyphicon glyphicon-pencil"></span>
					</button>
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
}





