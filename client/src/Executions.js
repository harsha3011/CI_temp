import React, { Component } from 'react';
import Request from 'superagent';

class Executions extends Component {
 
 constructor(props) {
          super(props);
          this.showConsole=this.showConsole.bind(this);
          this.state = {
            owner:'',
            repoName:'',
            repoBranch:''
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
        
        const url='http://localhost:9080/api/jarvis/VisualBI-2/master/executions';
        Request
       .get(url)
       .end(function(err,resp)
       {
         console.log(resp);
       });
 }

render() {
  return (
    <div>
            
   </div>
   );
 }
}

export default Executions;