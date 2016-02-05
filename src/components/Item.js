import React from 'react';
import ReactDOM from 'react-dom';

export default class Item extends React.Component{



	render(){
		return(
			<div className="list-item">
				{this.props.data}
				<span className="pull-right">
					<button className="btn" onClick={this.props.onEditItem}>
						<span className="glyphicon glyphicon-pencil"></span>
					</button>
					&nbsp;
					<button className="btn" onClick={this.props.onDeleteItem}>
						<span className="glyphicon glyphicon-remove"></span>
					</button>
				</span>
				
			</div>
		);
	}
}



