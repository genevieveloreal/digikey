import React, { useEffect, useState } from "react";
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

function ContactTracingSection(props) {
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

  const [locationState, setLocationState] = useState(states.VIC);

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
        <Grid container={true} spacing={1}>
          <Grid item={true} xs={12} md={12}>
            <Card>
              <CardContent className={classes.cardContent}>

                <Box mt={1}>
                  <Typography variant="h6" paragraph={true}>
                    <strong><MyLocationIcon /> Location</strong>
                    <Typography paragraph={true}>Choose your state to view relevant contact tracing information</Typography>
                  </Typography>
                  <Typography component="div">
                    <div>
                      <Select labelId="label" id="select" onChange={handleLocationStateChange} value={locationState}>
                        <MenuItem value="VIC">VIC</MenuItem>
                        <MenuItem value="QLD">QLD</MenuItem>
                        <MenuItem value="ACT" disabled={true}>ACT</MenuItem>
                        <MenuItem value="NSW" disabled={true}>NSW</MenuItem>
                        <MenuItem value="NT" disabled={true}>NT</MenuItem>
                        <MenuItem value="SA" disabled={true}>SA</MenuItem>
                        <MenuItem value="TAS" disabled={true}>TAS</MenuItem>
                        <MenuItem value="WA" disabled={true}>WA</MenuItem>
                      </Select>
                    </div>
                    <br/>
                  </Typography>
                </Box>

              </CardContent>
            </Card>

          </Grid>
          <Grid item={true} xs={12} md={12}>

          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default ContactTracingSection;
