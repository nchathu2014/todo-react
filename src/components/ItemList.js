import React from 'react';
import Item from './Item';

export default class ItemList extends React.Component{

	_editHandler(){
		console.log("_editHandler");
	}

	_deleteHandler(index){
		var arr = this.props.listData;       
        arr.splice(index, 1);
        this.forceUpdate();
	}

	render(){
		return(
			<div>
				<div className="col-lg-6 col-lg-offset-3">
					<div className="list">
						{this.props.listData.map((item,index)=>{
							return <Item  onEditItem={this._editHandler.bind(this)}  
										  onDeleteItem={this._deleteHandler.bind(this,index)} 
										  key={index} 
										  data={item}/>
						})}
					</div>
				</div>
			</div>
		);
	}
}



