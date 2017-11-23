import React, { Component } from "react";
import { Col, Row } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Search extends Component {
    render() {
        return (
            <Row>
            <Col size="sm-9">
            <form className="col-sm-offset-4 text-center">
                <h1 className="text-center">Search</h1>
                <h1 className="text-center">Topic</h1>
                <Input
                  value={this.props.title}
                  onChange={this.handleInputChange}
                  name="topic"
                />
                <h1 className="text-center">Start Year</h1>
                <Input
                  value={this.props.author}
                  onChange={this.handleInputChange}
                  name="startYear"
                />
                <h1 className="text-center">End Year</h1>
                <Input
                  value={this.props.author}
                  onChange={this.handleInputChange}
                  name="endYear"
                />
                <FormBtn
                  disabled={!(this.props.author && this.props.title)}
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </FormBtn>
              </form>
            </Col>
          </Row>

        )
    }
}

export default Search;