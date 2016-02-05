import React from 'react';
import Item from './Item';

export default class ItemList extends React.Component{
	render(){
		return(
			<div>
				<div className="col-lg-6 col-lg-offset-3">
					<div>
						{this.props.listData.map((item,index)=>{
							return <Item key={index} data={item}/>
						})}
					</div>
				</div>
			</div>
		);
	}
}



