import React, { Component } from 'react';
import Request from 'superagent';
import ConsoleOutput from './ConsoleOutput';
import RaisedButton from 'material-ui/RaisedButton'

class Executions extends Component {
 
 constructor(props) {
          super(props);
          this.showConsole=this.showConsole.bind(this);
          this.state = {
            owner:'',
            repoName:'',
            repoBranch:'',
            output:[]
          };
      }

 componentWillMount()
      {
        var getFiles1=localStorage.getItem("repoName");
         const reponame=JSON.parse(JSON.stringify(getFiles1));
          var getFiles2=localStorage.getItem("repoBranch");
         const repobranch=JSON.parse(JSON.stringify(getFiles2));
          var getFiles3=localStorage.getItem("owner");
         const ownername=JSON.parse(JSON.stringify(getFiles3));
        
        this.setState({
          owner:ownername,
          repoName:reponame,
          repoBranch:repobranch
         });
      }

 showConsole(){
        const owner=this.state.owner;
        const repoName=this.state.repoName;
        const repoBranch=this.state.repoBranch;
        
        const url='http://localhost:9080/api/'+owner+'/'+repoName+'/'+repoBranch+'/executions';
        Request
       .get(url)
       .end((err,resp)=>
       {
         console.log(resp.body.length);
         var temp=[];
          // for(var i=0;i<resp.body.length;i++){
          //   temp.push(resp.body[i]);
          // }
          // this.setState({
          //   output:temp
          // })
       });
 }

render() {
  return (
    <div>
    <RaisedButton onClick={this.showConsole()}>show</RaisedButton>
   </div>
   );
 }
}

export default Executions;