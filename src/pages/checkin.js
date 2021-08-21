import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import Grid from "@material-ui/core/Grid";
import Section from "../components/Section";
import Container from "@material-ui/core/Container";

class CheckInPage extends Component {
  state = {
    result: 'No result'
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }

  handleError = err => {
    console.error(err)
  }

  render() {
    return (
      <Section
        bgColor={this.props.bgColor}
        size={this.props.size}
        bgImage={this.props.bgImage}
        bgImageOpacity={this.props.bgImageOpacity}
      >
        <Container height="50%">
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
          />
          <p>{this.state.result}</p>
        </Container>
      </Section>
    )
  }
}

export default CheckInPage;

