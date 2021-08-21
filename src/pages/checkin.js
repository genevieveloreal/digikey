import React, { Component, Fragment } from 'react';
import QrReader from 'react-qr-reader';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Section from "../components/Section";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
class CheckInPage extends Component {
  state = {
    result: null
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
        <Container>
          <p><strong>Govhack demo tip:</strong> Scan any QR code, or continue manually</p>
          {this.state.result && (
            <Fragment>
              <p>Successful scan! Please click continue</p>
              <Button
                variant="contained"
                size="large"
                color="#0A369D"
                href="/share"
              >
              Continue
              </Button>
            </Fragment>
          )}
          {!this.state.result && (
            <Box mb={3}>
              <Button
                variant="contained"
                size="large"
                color="#0A369D"
                href="/share"
              >
                Check-in without scanning
              </Button>
            </Box>
          )}
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
          />
          <br />
        </Container>
      </Section>
    )
  }
}

export default CheckInPage;

