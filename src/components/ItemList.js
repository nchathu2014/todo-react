import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';

export default class ItemList extends React.Component{

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
							return <Item  onDeleteItem={this._deleteHandler.bind(this,index)} 
										  key={index} 
										  data={item}
										  ref="itemRef"/>
						})}
					</div>
				</div>
			</div>
		);
	}
}



