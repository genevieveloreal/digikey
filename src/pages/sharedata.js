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
import transferData from "../images/key-dots.gif";
import userImage from "../images/user.png";
import locationImage from "../images/location.png";
import { Icon, TextField, Tooltip } from "@material-ui/core";
import { HelpOutline } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { pgpKey } from "../util/pgpKey";
const useStyles = makeStyles((theme) => ({
  keyBlock: {
    width: '100%',
    fontSize: '8px',

    '& .MuiInputBase-input': {
      fontSize: '10px'
    }
  }

}));

function ShareDataPage(props) {
const classes = useStyles();

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
        <Typography variant="h5" component="p" color="secondary"><strong>Bunnings Carseldine</strong></Typography>
        <br />
        <Box alignItems="center" display="flex" justifyContent="center">
          <Box mr={1}>
            <img src={userImage} width="80px"/>
          </Box>
          <img src={transferData} height="30px" width="160px" />
          <Box ml={1}>
            <img src={locationImage} width="80px"/>
          </Box>
        </Box>
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
        <Box mt={2}>
          <Typography variant="h6">Your Public Key</Typography>
          <TextField className={classes.keyBlock} multiline rows={4} defaultValue={pgpKey} disabled={true} /><br/>
          <Tooltip title="Your Public Key is your key to privacy. Your personal information is automatically encrypted with this key during check-in. Only you and the authorised party are able to access the information submitted.">
            <Box><Typography variant="caption" component="a"> What is this?</Typography></Box>
          </Tooltip>
        </Box>
      </Container>
    </Section>
  );
}

export default ShareDataPage;
