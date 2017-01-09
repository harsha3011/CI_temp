import React from 'react'
import './App.css'
import {Grid,Row,Col} from 'react-flexbox-grid'
import Icon from 'react-icon-base'
const Facebook = () => (
    <Icon viewBox="0 0 40 40">
        <g><path d="m30.9 2.9q2.6 0 4.5 1.8t1.9 4.6v21.4q0 2.7-1.9 4.6t-4.5 1.8h-4.2v-13.2h4.4l0.7-5.2h-5.1v-3.3q0-1.3 0.5-1.9t2-0.6l2.8 0v-4.7q-1.5-0.2-4-0.2-3.1 0-4.9 1.8t-1.8 5.1v3.8h-4.5v5.2h4.5v13.2h-11.9q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5z"/></g>
    </Icon>
);
const Googleplus = () => (
    <Icon viewBox="0 0 40 40">
         <g><path d="m23.5 20.2q0-0.6-0.2-1.4h-8v2.9h4.8q-0.1 0.6-0.4 1.1t-0.8 1.2-1.5 1-2.1 0.4q-2.3 0-3.8-1.6t-1.6-3.8 1.6-3.8 3.8-1.6q2 0 3.4 1.3l2.3-2.2q-2.4-2.3-5.7-2.3-3.6 0-6.1 2.5t-2.5 6.1 2.5 6.1 6.1 2.5q3.6 0 5.9-2.4t2.3-6z m7.7 1h2.4v-2.4h-2.4v-2.5h-2.5v2.5h-2.4v2.4h2.4v2.5h2.5v-2.5z m6.1-11.9v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"/></g>
    </Icon>
);
const Twitter = () => (
    <Icon viewBox="0 0 40 40">
        <g><path d="m31.6 13.6q-1.3 0.6-2.7 0.8 1.5-0.9 2-2.6-1.4 0.8-2.9 1.1-1.4-1.5-3.5-1.5-1.9 0-3.3 1.4t-1.3 3.3q0 0.7 0.1 1.1-2.9-0.2-5.4-1.5t-4.3-3.4q-0.7 1.1-0.7 2.3 0 2.6 2.1 3.9-1.1 0-2.3-0.5v0q0 1.7 1.1 3t2.8 1.6q-0.7 0.2-1.1 0.2-0.3 0-0.9-0.1 0.4 1.4 1.6 2.3t2.8 1q-2.6 2-5.9 2-0.6 0-1.1-0.1 3.3 2.1 7.2 2.1 2.5 0 4.7-0.8t3.7-2.1 2.7-3.1 1.7-3.6 0.5-3.7q0-0.4 0-0.7 1.4-1 2.4-2.4z m5.7-4.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"/></g>
    </Icon>
);
const Linkedin = () => (
    <Icon viewBox="0 0 40 40">
        <g><path d="m8.3 31.6h5.1v-15.5h-5.1v15.5z m5.5-20.3q0-1.2-0.8-1.9t-2.1-0.8-2.1 0.8-0.8 1.9q0 1.1 0.8 1.9t2 0.8h0.1q1.3 0 2.1-0.8t0.8-1.9z m13 20.3h5.2v-8.9q0-3.5-1.6-5.2t-4.3-1.8q-3.1 0-4.7 2.6h0v-2.2h-5.1q0 1.4 0 15.5h5.1v-8.7q0-0.8 0.2-1.2 0.3-0.8 1-1.4t1.7-0.5q2.5 0 2.5 3.5v8.3z m10.5-22.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"/></g>
    </Icon>
);
export default class Footer extends React.Component {
    render() {
    	const styles = {
            mainStyles:{
                height:50,
                background:'#2a8ced',
                color: '#FFF',
                fontFamily: 'sans-serif',
                fontSize: 14,
                bottom:0, left: 0, right: 0 
            }
        };
        return (
            <footer style={styles.mainStyles}>
                <Grid>
                    <Row center="xs">
                        <Col xs={4}><b>KI</b></Col>
                        <Col xs={4}>Copyright @ 2016</Col>  
                        <Col xs={4}>Connect Us on : 
                            <a href='#'><Facebook /></a>
                            <a href='#'><Googleplus /></a>
                            <a href='#'><Linkedin /></a>
                            <a href='#'><Twitter /></a>
                        </Col>  
                    </Row>
                </Grid>
            </footer>
            )
    }
}