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
import cookie from 'react-cookie';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
palette: {
 textColor: teal700,
 primary1Color: teal400,
 primary2Color: teal700
}
});


function redirectIfLoggedIn(nextState, replace, next) {
	const token = cookie.load('token');
	if(token) {
			replace('/ownerName');
	}
	next();
}

function redirectIfNotLoggedIn(nextState, replace, next) {
	const token = cookie.load('token');
	if(!token) { replace('/');
  alert('Login is required..!')
 }
	next();
}

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={hashHistory}>
<<<<<<< HEAD
          <Route path="/" component={login} onEnter={redirectIfLoggedIn}/>
          <Route path="logout" component={login} onEnter={redirectIfLoggedIn}/>
          <Route path="ownerName" component={App} onEnter={redirectIfNotLoggedIn}>
            <IndexRoute component={home} onEnter={redirectIfNotLoggedIn}/>
            <Route path="createRepo" component={CreateProject} onEnter={redirectIfNotLoggedIn}/>
            <Route path="repoName/branch" component={Branch} onEnter={redirectIfNotLoggedIn}/>
            <Route path="executions" component={Executions} onEnter={redirectIfNotLoggedIn}/>
            <Route path="repoName/pipelineSettings" component={CreatePipeline} onEnter={redirectIfNotLoggedIn}/>
            <Route path="repoName/branch/branchName" component={BuildReport} onEnter={redirectIfNotLoggedIn}/>
            <Route path="Ruberic" component={RubericSettings} onEnter={redirectIfNotLoggedIn}/>
            <Route path="repoName/teamtype" component={TeamType} onEnter={redirectIfNotLoggedIn}/>
=======
          <Route path="/" component={login}/>
          <Route path="logout" component={login}/>
          <Route path="ownerName" component={App}>
            <IndexRoute component={Home}/>
            <Route path="createRepo" component={CreateProject}/>
            <Route path="repoName/branch" component={Branch}/>
            <Route path="executions" component={Executions}/>
            <Route path=":repoName/pipelineSettings" component={CreatePipeline}/>
            <Route path="repoName/branch/branchName" component={BuildReport}/>
            <Route path="Ruberic" component={RubericSettings}/>
            <Route path=":repoName/teamtype" component={TeamType}/>
>>>>>>> fe630e6999f65ec3cba0c57e4154e720d47d8930
          </Route>
      </Router>
 </MuiThemeProvider>
, document.querySelector("#root"));
