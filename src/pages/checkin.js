import React, { Component, Fragment, useEffect, useState } from 'react';
import { useRouter } from "./../util/router.js";
import QrReader from 'react-qr-reader';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Section from "../components/Section";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";

function CheckInPage(props) {
  const router = useRouter();
  const history = useHistory();
  const [result, setResult] = useState(false);

  const handleScan = data => {
    if (data) {
      setResult(result);
    }
  };

  const handleError = err => {
    console.error(err)
  };

  useEffect(() => {
    if (result) {
      history.replace("/share");
    }
  }, result);

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <p><strong>Govhack demo tip:</strong> Scan any QR code, or continue manually</p>
        <br/>
        {!result && (
          <Box mb={3}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              href="/share"
            >
              Check-in without scanning
            </Button>
          </Box>
        )}
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <br />
      </Container>
    </Section>
  )
};

export default CheckInPage;