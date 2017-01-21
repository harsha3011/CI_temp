import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home'
import login from './LoginGithub'
import CreateProject from './CreateProject'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {teal400, teal700} from 'material-ui/styles/colors';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Branch from './Branch'
import Executions from './Executions'
import CreatePipeline from './CreatePipeline'
import BuildReport from './BuildReport'
import RubericSettings from './RubericSetting'
import TeamType from './TeamType'
import Report from './Report'
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
            <IndexRoute component={Home}/>
            <Route path="createRepo" component={CreateProject}/>
            <Route path="repoName/branch" component={Branch}/>
            <Route path="executions" component={Executions}/>
            <Route path="repoName/pipelineSettings" component={CreatePipeline}/>
            <Route path="repoName/branch/branchName" component={Report}/>
            <Route path="repoName/teamtype" component={TeamType}/>
          </Route>
      </Router>
 </MuiThemeProvider>
, document.querySelector("#root"));