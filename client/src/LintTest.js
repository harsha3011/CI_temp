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
        includeFiles:[],
        excludeFiles:[]
      }
      this.handleIncludeChange=this.handleIncludeChange.bind(this);
      this.handleExcludeChange=this.handleExcludeChange.bind(this);
    }
    handleIncludeChange(values)
    {
      this.setState({
        includeFiles:values}
      );
    }
    handleExcludeChange(values)
    {
      this.setState({
        excludeFiles:values}
      );
    }
    render()
    {
      return(
        <div>
        <Grid>
        <Row >
        <Col xs={12}>
        <Card>
        
          <CardHeader
           title={this.props.text}
            actAsExpander={true}
            showExpandableButton={true}
          >
          </CardHeader>
          <CardText expandable={true}>

              <Row center="xs">
                <Col xs={6}>
                  Include files to test
                  <MultiInputComp values={this.state.includeFiles} onChange={this.handleIncludeChange} />
                </Col>
                <Col xs={6}>
                  Exclude files from test
                  <MultiInputComp values={this.state.excludeFiles}
                  onChange={this.handleExcludeChange} />
                </Col>
              </Row>

          </CardText>
        </Card>
        </Col>
        </Row>
        </Grid>
        </div>
      );
    }

}
export default LintTest;
