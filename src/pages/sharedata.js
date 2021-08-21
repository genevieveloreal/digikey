import React, { useEffect, useState } from "react";
import Alert from "@material-ui/lab/Alert";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Section from "../components/Section";
import Switch from '@material-ui/core/Switch';
import Typography from "@material-ui/core/Typography";
import transfer from "../images/transfer.png";

function ShareDataPage(props) {
  let items = [
    { id: 1, title: "Name", info: "test", featured: false },
    { id: 2, title: "Address", info: "test", featured: false },
    { id: 3, title: "Phone number", info: "test", featured: false },
    { id: 4, title: "Vaccination data", info: "test", featured: false },
    { id: 5, title: "TFN", info: "test", featured: false }
  ];

  const [dataItems, setDataItems] = useState(items);
  const [checkInMessage, setCheckInMessage] = useState(null);

  const toggleDataInclusion = (id) => {
   dataItems[id].featured = !dataItems[id].featured;
   setDataItems([...dataItems]);
  };

  const displayCheckInMessage = () => {
    setCheckInMessage("Thank you for checking in!");
  };

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Typography variant="h6" component="p">You are about to check-in with</Typography>
        <Typography variant="h5" component="p"><strong>Bunnings Carseldine</strong></Typography>
        <br />
        <img src={transfer} width="300px" />
        <br />
        <br />
        <br />
        <Typography variant="h6" component="p">Select which information you would like to share with them:</Typography>
        <Divider />
        {dataItems && dataItems.length > 0 && (
          <List variant="flush">
            {dataItems.map((item, index) => (
              <ListItem key={item.id}>
                <ListItemIcon>
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
                <Switch checked={item.featured} onChange={() => toggleDataInclusion(index)}/>
              </ListItem>
            ))}
          </List>
        )}
        <Box  display="inline" mr={2}>
          <Button size="large" variant="contained" color="secondary" href="/dashboard">Back</Button>
        </Box>
        <Button size="large" variant="contained" color="primary" onClick={displayCheckInMessage}>Check-in</Button>
        <br />
        <br />
        {checkInMessage && (
          <Alert severity="success">{checkInMessage} <a href="/dashboard">Click here</a> to go back to your DigiKey dashboard.</Alert>
        )}
      </Container>
    </Section>
  );
}

export default ShareDataPage;
