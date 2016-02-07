import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';

export default class Item extends React.Component{

	constructor(props){
		super(props);
		this.state={
			data:this.props.data,
			isEdit:false
		}


	}

	componentDidMount(){

		this.setState({
			data:this.props.data // this.props.data => this.state.data moving props data to a state
		})
console.log("componentDidMount"+this.state.data)
	}

	

	render(){
		return (this.state.isEdit) ? this._renderEditDisplay():this._renderDisplay();		
	}

	_onEditItem(){
		this.setState({
			isEdit:true
		});
	}

	_onEditItemSave(){
		this.setState({
			data:ReactDOM.findDOMNode(this.refs.editTextRef).value,
			isEdit:false
		});

	}

	_closeEdit(){
		this.setState({
			isEdit:false
		});
	}

	_onChangeHandle(event){

		console.log(event.target.value);
		
		
		

	}

	componentDidUpdate(){
		/*console.log(this.refs.labelRef)*/
		
	}

	_renderEditDisplay(){
		return(
			<div className="list-item">
					<input type="text" ref="editTextRef"
									   className="form-control editTextBox" 
							           defaultValue={this.state.data}
							           onChange={this._onChangeHandle}/>

					<span className="pull-right">
						<button className="btn" onClick={this._onEditItemSave.bind(this)}>
							<span className="glyphicon glyphicon-floppy-saved"></span>
						</button>
						&nbsp;
						<button className="btn" onClick={this._closeEdit.bind(this)}>
							<span className="glyphicon glyphicon-menu-left"></span>
						</button>
					</span>
			</div>
		);
	}

	_renderDisplay(){
		
		
		var List1 = Immutable.List([1])
		var List2 = List1.push(this.state.data)
		this.props.data=List2;
		console.log("Nuwan "+List2)
		
		return(

				<div className="list-item">


					<span id="labelRef" ref="labelRef">{this.props.data}</span>
					{this.props.id+1} ---> 
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
}

Item.propTypes={
	defaultValue:React.PropTypes.string
}

