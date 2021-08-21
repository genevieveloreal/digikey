import React, { useState } from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "./SectionHeader";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DashboardItems from "./DashboardItems";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Select from '@material-ui/core/Select';
import Typography from "@material-ui/core/Typography";
import MenuItem from '@material-ui/core/MenuItem';
import MyLocationIcon from "@material-ui/icons/MyLocation";
import LinkMui from "@material-ui/core/Link";
import { Link, useRouter } from "./../util/router.js";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    padding: theme.spacing(3),
  },
}));

function DashboardSection(props) {
  const classes = useStyles();
  const router = useRouter();

  const states = {
    ACT: "ACT",
    NSW: "NSW",
    NT: "NT",
    QLD: "QLD",
    SA: "SA",
    TAS: "TAS",
    VIC: "VIC",
    WA: "WA"
  };

  const restrictions = {
    curfew: false,
    funeralRestrictions: false,
    masks: true,
    schoolRestrictions: false,
    socialDistancing: true,
    weddingRestrictions: false
  };

  const infoLinks = {
    ACT: "https://www.covid19.act.gov.au/",
    NSW: "https://www.nsw.gov.au/covid-19/rules",
    NT: "https://coronavirus.nt.gov.au/stay-safe/covid-19-lockdown-restrictions-in-place",
    QLD: "https://www.qld.gov.au/health/conditions/health-alerts/coronavirus-covid-19",
    SA: "https://www.covid-19.sa.gov.au/health-advice",
    TAS: "https://www.coronavirus.tas.gov.au/",
    VIC: "https://www.dhhs.vic.gov.au/victorias-restriction-levels-covid-19",
    WA: "https://www.wa.gov.au/government/covid-19-coronavirus"
  };

  const [locationState, setLocationState] = useState(states.NSW);

  const handleLocationStateChange = (event) => {
    const newLocationState = event.target.value;
    setLocationState(states[newLocationState]);
  };

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} md={6}>
            <DashboardItems locationState={locationState} />
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <Card>
              <CardContent className={classes.cardContent}>
                <Box>
                  <Typography variant="h6" paragraph={true}>
                    <strong>Welcome back, Govhacker!</strong>
                  </Typography>
                  <Typography paragraph={true}>
                    Your DigiKey account gives you control over your data, including what you share and who you share it with.
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="h6" paragraph={true}>
                    <strong><MyLocationIcon /> Location</strong>
                    <Typography paragraph={true}>Your location is {locationState}. Planning travel? Change your state to view the current restrictions and more information.</Typography>
                  </Typography>
                  <Typography component="div">
                    <div>
                      <Select labelId="label" id="select" onChange={handleLocationStateChange} value={locationState}>
                        <MenuItem value="ACT">ACT</MenuItem>
                        <MenuItem value="NSW">NSW</MenuItem>
                        <MenuItem value="NT">NT</MenuItem>
                        <MenuItem value="QLD">QLD</MenuItem>
                        <MenuItem value="SA">SA</MenuItem>
                        <MenuItem value="TAS">TAS</MenuItem>
                        <MenuItem value="VIC">VIC</MenuItem>
                        <MenuItem value="WA">WA</MenuItem>
                      </Select>
                    </div>
                    <br/>
                  </Typography>
                </Box>
                <Box>
                  <List variant="flush">
                    <ListItem>{restrictions.masks ? "✔️" : "❌"} Masks</ListItem>
                    <ListItem>{restrictions.socialDistancing ? "✔️" : "❌"} Social distancing</ListItem>
                    <ListItem>{restrictions.curfews ? "✔️" : "❌"} Curfew observed</ListItem>
                    <ListItem>{restrictions.funeralRestrictions ? "✔️" : "❌"} Funeral restrictions</ListItem>
                    <ListItem>{restrictions.weddingRestrictions ? "✔️" : "❌"} Wedding restrictions</ListItem>
                    <ListItem>{restrictions.schoolRestrictions ? "✔️" : "❌"} School restrictions</ListItem>
                    <Box mt={2}>
                      <Button color="secondary" variant="contained" href={infoLinks[locationState]} target="_blank">Read more</Button>
                    </Box>
                  </List>
                </Box>
              </CardContent>
            </Card>
            <br />
            <Card>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" paragraph={true}>
                  <strong>Check-in</strong>
                </Typography>
                <Typography paragraph={true}>Check-in now by clicking the button below. You'll be able to select which data keys you share.</Typography>
                <Box mt={2}>
                  <Button button color="primary" variant="contained" size="large" href="/checkin">Check-in Now</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default DashboardSection;
