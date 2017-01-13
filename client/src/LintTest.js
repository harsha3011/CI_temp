import React,{Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import MultiInputComp from './MultiDataInput';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class LintTest extends Component
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


        <Row >
        <Col xs={12}>
        <Card>

          <CardHeader
           title={"Include files to test"}
            actAsExpander={true}
            showExpandableButton={true}
          >
          </CardHeader>
          <CardText expandable={true}>

              <Row center="xs" >
                <Col xs={6}>

                  <MultiInputComp values={this.state.files}
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
export default LintTest;
