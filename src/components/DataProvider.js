import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList';

export default class DataProvider extends React.Component{


	constructor(props){
		super(props);
		this.state={
			globalList:[1,2,3,4,5]
		}
		
	}

	_addMe(){
		
		this.setState({
			globalList:this.state.globalList.concat(6)
		})
	}

	_delMe(){
		var array = this.state.globalList;
		array=array.splice(2,1)
		console.log(array);
		this.setState({
			//globalList:this.state.globalList.splice(2,1)
		})
	}
	

	render(){

		return(
			<div>
				<ToDoList testList={this.state.globalList}
						  delMe={this._delMe.bind(this)}
						  addMe={this._addMe.bind(this)}/>
			</div>
		);
	}
}