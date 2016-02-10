import React from 'react';
import Item from './Item';

export default class ItemList extends React.Component{

	constructor(props){
		super(props);		
	}

	render(){	
		return(
			<div className="itemListContainer">
			<div className="count-header">
				<span>LIST COUNT : [{this.props.toDoList.length}]
					<button className="btn btn-sm btn-warning pull-right" 
							onClick={this._clearAll.bind(this)}>CLEAR ALL</button>
				</span>		
			</div>
				{this.props.toDoList.map((item,index)=>{
					return <Item  name={item} 
							key={Math.random()} 
							id={index} 
							removeItem={this._removeItem.bind(this,index)}/>
				})}
			</div>
		);
	}

	_clearAll(){
		var array = this.props.toDoList.splice(0,this.props.toDoList.length);
		this.forceUpdate();
	}

	_removeItem(index){
		this.props.toDoList.splice(index,1);
		this.forceUpdate();
	} 
}

ItemList.propTypes={
	name:React.PropTypes.string,
	removeItem:React.PropTypes.func
}





