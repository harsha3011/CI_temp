import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import home from './Home'
import login from './LoginGithub'
import CreateProject from './CreateProject'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {teal400, teal700} from 'material-ui/styles/colors';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Branch from './Branch'
import CreatePipeline from './CreatePipeline'
import BuildReport from './BuildReport'
import RubericSettings from './RubericSetting'
injectTapEventPlugin();

const muiTheme = getMuiTheme({
palette: {
  textColor: teal700,
  primary1Color: teal400,
  primary2Color: teal700
}
});

ReactDOM.render(
   <MuiThemeProvider muiTheme={muiTheme}>
       <Router history={hashHistory}>
           <Route path="/" component={login}/>
           <Route path="logout" component={login}/>
           <Route path="ownerName" component={App}>
             <IndexRoute component={home}/>
             <Route path="createRepo" component={CreateProject}/>
             <Route path="repoName/branch" component={Branch}/>
             <Route path="repoName/pipelineSettings" component={CreatePipeline}/>
             <Route path="repoName/branch/branchName" component={BuildReport}/>
             <Route path="Ruberic" component={RubericSettings}/>
           </Route>
       </Router>
  </MuiThemeProvider>
, document.querySelector("#root"));
