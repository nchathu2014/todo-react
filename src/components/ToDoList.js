import React from 'react';
import ReactDOM from 'react-dom';
import InputComponent from './InputComponent';
import ItemList from './ItemList';

export default class ToDoList extends React.Component{

	constructor(){
		super();
		this.state={
			data:"",
			listData:["Item 1"]
		}
	}

	_itemAddFunc(event){
		console.log("_itemAddFunc Fires "+this.state.data);
		this.setState({
			listData:this.state.listData.concat(this.state.data)
		});
		var node = ReactDOM.findDOMNode(document.getElementById('inputBox'));
		console.log(node);
					
	}

	_itemOnChange(event){
		this.setState({
			data:event.target.value
		});	
	}

	render(){

		var style={
			'color':'#ffffff'
		}

		return(
			<div className="container">
				<h2 className='text-center' style={style}>To-Do-List : ReactJS</h2>
				<div className="row">
					<div className="col-lg-6 col-lg-offset-3">
						<InputComponent itemInput={this.state.data} 
						                itemAddFunc={this._itemAddFunc.bind(this)}
						                itemOnChange={this._itemOnChange.bind(this)}/>
					</div>
					<div className="row">
						<ItemList listData={this.state.listData}/>
					</div>
				</div>
			</div>
		);
	}
}



