import React,{Component} from 'react';
import './App.css';
import ScriptConfig from './ScriptConfig';


class MultiScriptConfig extends Component{
	constructor() {
		super();
		this.state = {
			value: [{title: 'a', cmd: 'b'}],
		}
		this.handleChange = this.handleChange.bind(this);
	}
	

	
	render(){
		const arrShell = this.state.value.map((value,index) =>{
	    return(
				
			<ScriptConfig value={value} onChange={this.handleChange} />
			
	    	) ;
      });
		return(
			<div>
				{arrShell}
			</div>
		);
  	}

  	handleChange(newValue) {
  		this.setState({value: newValue});
  		console.log(newValue);
  	}

}


export default MultiScriptConfig;
                  
