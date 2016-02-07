import React from 'react';
import ReactDOM from 'react-dom';
import InputComponent from './InputComponent';
import ItemList from './ItemList';

export default class ToDoList extends React.Component{

	constructor(){
		super();
		this.state={
			data:"",
			listData:[]
		}
	}

	_itemAddFunc(event){
		

		if(this.state.data.trim()==""){
			alert("Enter a topic");
		}else{
			var node = ReactDOM.findDOMNode(this.refs.inputRef.refs.inputBox);		
			this.setState({
				listData:this.state.listData.concat(this.state.data)
			});
			if(node.value){
				this.setState({
					data:""
				})
				node.focus();
			}
		}	
	}

	_itemOnChange(event){
		this.setState({
			data:event.target.value
		});	
	}

	_enterKeyPressed(event){
		
		if(event.charCode==13){
			
			this._itemAddFunc()
		}
	}

	render(){

		var style={
			'color':'#ffffff'
		}

		return(
			<div className="container">
				<h2 className='text-center' style={style}>To-Do-List : ReactJS (ES6)</h2>
				<div className="row">
					<div className="col-lg-6 col-lg-offset-3">
						<InputComponent itemInput={this.state.data} 
						                itemAddFunc={this._itemAddFunc.bind(this)}
						                enterKeyPressed={this._enterKeyPressed.bind(this)}
						                itemOnChange={this._itemOnChange.bind(this)}
						                ref={'inputRef'}/>					
					</div>
					<div className="row">
						<ItemList listData={this.state.listData}/>
					</div>
				</div>
			</div>
		);
	}
}

ToDoList.propTypes={
	itemInput:React.PropTypes.string,
	itemAddFunc:React.PropTypes.func,
	itemOnChange:React.PropTypes.func,
	listData:React.PropTypes.func
}

ToDoList.defaultProps={
	itemInput:""
}


