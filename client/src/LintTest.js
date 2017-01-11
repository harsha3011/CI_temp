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
        files:{
          include:[],
          exclude:[]
        }
      }

    }
    handleIncludeChange(values)
    {
      var data= this.state.files;
      data["include"]=values;
      this.setState({
        files:data}
      );

      this.props.onChange(this.state.files);
    }
    handleExcludeChange(values)
    {
      var data= this.state.files;
      data["exclude"]=values;
      this.setState({
        files:data}
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
           title={"Click here to configure"}
            actAsExpander={true}
            showExpandableButton={true}
          >
          </CardHeader>
          <CardText expandable={true}>

              <Row center="xs" center="sm">
                <Col xs={12} sm={6}>
                  Include files to test
                  <MultiInputComp values={this.state.files.include}
                  onChange={this.handleIncludeChange.bind(this)} />
                </Col>

                <Col xs={12} sm={6}>
                  Exclude files from test
                  <MultiInputComp values={this.state.files.exclude}
                  onChange={this.handleExcludeChange.bind(this)} />
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
