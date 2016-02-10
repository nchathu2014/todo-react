import React from 'react';
import ItemList from './ItemList';

export default class ToDoList extends React.Component{

	constructor(props){
		super(props);
		this.state={
			inputText:""
			

		}
		 
	}

	_onKeyPress(event){
		
		if(event.charCode==13){
			console.log(event.charCode)
			this.props.toDoList.push(event.target.value);
			this.forceUpdate();
			this.refs.inputBox.value=''
		}

		
	}

	_onChange(){
		console.log(this.refs.inputBox.value)
		this.setState({
			inputText:this.refs.inputBox.value
		});
	}

	render(){


		return(
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-lg-offset-3">
						<h3 className="text-center" style={{color:'white'}}>To-Do-List : ReactJS (with ES6 Standard)</h3>
						<input  type="text" 
					   			onKeyPress={this._onKeyPress.bind(this)} 
					   			onChange={this._onChange.bind(this)}
					   			ref="inputBox"
					   			className="form-control cus-input"/>
					   	
						<ItemList  toDoList={this.props.toDoList}/>

					</div>
				</div>
			</div>
		);
	}
}



