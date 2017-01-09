import React,{Component} from 'react';
import {Menu,MenuItem} from 'material-ui/Menu';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import ActionInfo from 'material-ui/svg-icons/action/info';
import './App.css';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
const EditIcon = () => (
  <SvgIcon >
    <path d="M2 12.88V16h3.12L14 7.12 10.88 4 2 12.88zm14.76-8.51c.33-.33.33-.85 0-1.18l-1.95-1.95c-.33-.33-.85-.33-1.18 0L12 2.88 15.12 6l1.64-1.63z" />
  </SvgIcon>
);
const styles={ 
 iconStyles : {
display:'flex',
width:'auto',
marginRight:24,
},
MenuStyles :{
	borderRadius:2,
	float:'left',
	
},
PaperStyle:{
	display:'inline-block',
	margin:'16px 32px 16px 0',
	marginLeft:400,
},
FloatStyle:{
	position:'absolute',
	bottom:250,
	right:350,

}
};

class Main extends Component{
	render(){
		return(<div ><Paper style={styles.PaperStyle}>
			<Menu  className="mainItems" desktop={true} style={styles.MenuStyles}>
      			<MenuItem primaryText="MovieSearch" rightIcon={<div style={styles.iconStyles}><ActionInfo/><EditIcon/></div>} /><Divider/>
    			<MenuItem primaryText="Jquery Assignment" href="http://www.google.com" rightIcon={<div style={styles.iconStyles}><ActionInfo /><EditIcon/></div>} /><Divider/>
     			<MenuItem primaryText="Spam" href="http://www.google.com" rightIcon={<div style={styles.iconStyles}><ActionInfo /><EditIcon/></div>} /><Divider/>
      			<MenuItem primaryText="Follow up" href="http://www.google.com" rightIcon={<div style={styles.iconStyles}><ActionInfo /><EditIcon/></div>} />
   			</Menu>
   		</Paper>
		<FloatingActionButton style={styles.FloatStyle}><ContentAdd /></FloatingActionButton>
		</div>);
	}
 }
 export default Main;