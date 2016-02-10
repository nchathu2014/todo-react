import React from 'react';
import Item from './Item';

export default class ItemList extends React.Component{

	constructor(props){
		super(props);
			
		
	}

	_removeItem(index){
		console.log("_removeItem");
		this.props.toDoList.splice(index,1);
		this.forceUpdate();
	} 

	

	render(){
	
		return(
			<div className="itemListContainer">
			<div className="count-header"><h4>LIST COUNT : [{this.props.toDoList.length}]</h4></div>
				{this.props.toDoList.map((item,index)=>{
					return <Item  name={item} 
							key={Math.random()} 
							id={index} 
							removeItem={this._removeItem.bind(this,index)}
							/>
				})}
			</div>
		);
	}
}




