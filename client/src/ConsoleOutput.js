import React,{Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import ConsoleOutputList from './ConsoleOutputList';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class ConsoleOutput extends Component
{
    constructor()
    {
      super();
      this.state={
        files:[]
      }

    }
    handleIncludeChange(values)
    {

      this.setState({
        files:values}
      );

      this.props.onChange(this.state.files);
    }

    render()
    {
      return(


        <Row>
        <Col xs={12}>
        <h1 style={{color:'white',textAlign:'center'}}>CONSOLE OUTPUT</h1>
        <Card>

          <CardHeader
           title={"Console Output"}
            actAsExpander={true}
            showExpandableButton={true}
          >
          </CardHeader>
          <CardText expandable={true}>

              <Row center="xs" >
                <Col xs={6}>
                  <ConsoleOutputList values={this.state.files}
                  onChange={this.handleIncludeChange.bind(this)} />
                </Col>


              </Row>

          </CardText>
        </Card>
        </Col>
        </Row>

      );
    }

}
export default ConsoleOutput;
