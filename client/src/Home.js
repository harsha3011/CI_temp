import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import ActionInfo from 'material-ui/svg-icons/action/info';
import AlarmOff from 'react-icons/lib/md/alarm-off';
import AlarmOn from 'react-icons/lib/md/alarm-on';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Table, TableBody,  TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import {IndexLink, Link} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Grid ,Row, Col} from 'react-flexbox-grid'
import './App.css'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
const tableData = [
  {
    Reponame: 'Movie Search',
    status:<AlarmOn data-tip='success' color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'D3',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'Movie App',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
  },
  {
    Reponame: 'Javascript',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
  },
  {
    Reponame: 'Sample repo',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'Javascript',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'React',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
   },
    {
    Reponame: 'Javascript',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
  },
  {
    Reponame: 'Sample repo',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'Javascript',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'React',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
   }
];
const tableData1 = [
  {
    Reponame: 'Movie React',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'Angular',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'Application',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
  },
   {
    Reponame: 'Javascript',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
  },
  {
    Reponame: 'Sample repo',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'Javascript',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'React',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
   },
  {
    Reponame: 'JQuery',
    status: <AlarmOff color='red' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
  },
  {
    Reponame: 'Sample Data',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'Bootstrap',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: true,
  },
  {
    Reponame: 'HTML',
    status: <AlarmOn color='green' size={30} />,
    lastfail:'15-06-2016',
    lastpass:'20-11-2016',
    configured: false,
   }
];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Configure',
    };
  }
  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  render() {
   return (<Grid>
    <Row>
    <Col xs={12}>
     <h2>List of Repositories</h2>
    </Col>
    </Row>
    <Row>
     <Col xs={11}>
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
      <Tab label="configured" value="Configure" >
       <div>
        <Paper className='mainItems'>
		     <Table className='tabs'>
			    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
	         <TableRow>
	          <TableHeaderColumn><b>Repository</b></TableHeaderColumn>
            <TableHeaderColumn><b>Status</b></TableHeaderColumn>
	          <TableHeaderColumn><b>Last Fail</b></TableHeaderColumn>
	          <TableHeaderColumn><b>Last Pass</b></TableHeaderColumn>
	         </TableRow>
          </TableHeader>
    		  <TableBody  displayRowCheckbox={false}>
      		{tableData.map( (row, index) => (
      		 <TableRow key={index} selected={row.selected}>
            <TableRowColumn>
             <Link to="/App/temp" activeClassName="active">{row.Reponame}</Link>
            </TableRowColumn>
            <TableRowColumn>{row.status}</TableRowColumn>
            <TableRowColumn>{row.lastfail}</TableRowColumn>
            <TableRowColumn>{row.lastpass}</TableRowColumn>
           </TableRow>
          ))}
	 	     </TableBody>
  		  </Table>
   	   </Paper>
      </div>
     </Tab>
     <Tab label="Not configured" value="Not configured">
      <div>
       <Paper className='mainItems'>
		    <Table className='tabs'>
			   <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
	        <TableRow>
	          <TableHeaderColumn ><b>Repository</b></TableHeaderColumn>
	          <TableHeaderColumn ><b>Status</b></TableHeaderColumn>
	          <TableHeaderColumn ><b>Last Fail</b></TableHeaderColumn>
	          <TableHeaderColumn ><b>Last Pass</b></TableHeaderColumn>
	         </TableRow>
         	</TableHeader>
    		  <TableBody  displayRowCheckbox={false}>
      		{tableData1.map( (row, index) => (
           <TableRow key={index} selected={row.selected}>
            <TableRowColumn><Link to="/App/temp" activeClassName="active">{row.Reponame}</Link></TableRowColumn>
            <TableRowColumn>{row.status}</TableRowColumn>
            <TableRowColumn>{row.lastfail}</TableRowColumn>
            <TableRowColumn>{row.lastpass}</TableRowColumn>
           </TableRow>
          ))}
	  	   </TableBody>
  		  </Table>
   	   </Paper>
      </div>
     </Tab>
    </Tabs>
   </Col>
   </Row>
   <Row end='xs'  style={{marginBottom:100}}>
         <IndexLink to="/App/create" activeClassName="active">
         <Col xs={1}>
          <FloatingActionButton style={{position:'fixed',bottom:100,right:50,}}zDepth={1}>
           <ContentAdd />
          </FloatingActionButton>
          </Col>
         </IndexLink>
    </Row>

  </Grid>)
 }
}

export default Home;




