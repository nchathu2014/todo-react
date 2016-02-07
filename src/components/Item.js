import React from 'react';
import ReactDOM from 'react-dom';

export default class Item extends React.Component{

	constructor(){
		super();
		this.state={
			data:null,
			isEdit:false
		}
	}

	componentDidMount(){
		this.setState({
			data:this.props.data // this.props.data => this.state.data moving props data to a state
		})
	}

	_renderEditDisplay(){
		return(
			<div className="list-item">
					<input type="text" ref="editTextRef"
									   className="form-control editTextBox" 
							           defaultValue={this.state.data}/>
					<span className="pull-right">
						<button className="btn" onClick={this._onEditItemSave.bind(this)}>
							<span className="glyphicon glyphicon-floppy-disk"></span>
						</button>
						&nbsp;
						<button className="btn" onClick={this._closeEdit.bind(this)}>
							<span className="glyphicon glyphicon-option-horizontal"></span>
						</button>
					</span>
			</div>
		);
	}

	_onEditItem(){
		this.setState({
			isEdit:true
		});
	}

	_onEditItemSave(){
		this.setState({
			data:ReactDOM.findDOMNode(this.refs.editTextRef).value
		})
	}

	_closeEdit(){
		this.setState({
			isEdit:false
		})
	}

	_renderDisplay(){
		return(

				<div className="list-item">
					{this.state.data}
					<span className="pull-right">
						<button className="btn" onClick={this._onEditItem.bind(this)}>
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

	render(){
		if(this.state.isEdit){
		  return this._renderEditDisplay();
		}else{
          return this._renderDisplay();
		}
		
	}
}



