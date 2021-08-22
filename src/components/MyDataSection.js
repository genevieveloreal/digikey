import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "./SectionHeader";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardActionArea,
  CardActions,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import { CheckCircle } from "@material-ui/icons";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  accordion: {
    // Remove shadow
    boxShadow: "none",
    "&:before": {
      // Remove default divider
      display: "none",
    },
    // Add a custom border
    "&:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  expanded: {
    margin: `0 !important`,
  },
  summary: {
    minHeight: 78,
  },
  summaryContent: {
    margin: "0 !important",
  },
}));

function MyDataSection(props) {
  const classes = useStyles();


  const checkins = [
    {
      name: 'Bunnings Carseldine',
      date: '20/07/2021',
      dataShared: [
        'Full Name',
        'Phone'
      ],
      alerts: [
        'Contact tracing location'
      ]
    },
    {
      name: 'Brisbane Entertainment Centre',
      date: '19/07/2021',
      dataShared: [
        'Full Name',
        'Phone',
        'Date of Birth'
      ],
      alerts: [
        ''
      ]
    },
    {
      name: 'Centrelink Chermside',
      date: '15/07/2021',
      dataShared: [
        'Full Name',
        'Phone',
        'Date of Birth',
        'Email',
        'Tax File Number'
      ],
      alerts: [
        ''
      ]
    },
    {
      name: 'Department of Transport Chermside',
      date: '01/07/2021',
      dataShared: [
        'Full Name',
        'Phone',
        'Date of Birth',
        'Email',
        'Drivers Licence'
      ],
      alerts: [
        ''
      ]
    },
    {
      name: 'Officeworks Windsor',
      date: '30/06/2021',
      dataShared: [
        'Phone',
      ],
      alerts: [
        ''
      ]
    },

  ]

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="md">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        <Box mb={4}>
          <Button size="small" variant="outlined" href="/dashboard">&lt; Back to Dashboard</Button>
        </Box>
        <Grid container={true} spacing={4} alignItems="stretch">

        {checkins.map((item, index) => (
          <Grid item={true} xs={12} md={4} key={index}>
            <Box mb={2}>
              <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {item.name}
                    </Typography>
                    <Typography gutterBottom variant="body1">
                      {item.date}
                    </Typography>
                    <Typography gutterBottom variant="body1">
                      <List>
                      { item.dataShared.map((item, x) => (
                        <ListItem key={x} dense button>
                          <ListItemIcon>
                            <CheckCircle/>
                          </ListItemIcon>
                          <ListItemText primary={item}/>
                        </ListItem>
                      ))}
                      </List>
                    </Typography>

                  </CardContent>
                <CardActions>
                  <Button size="small" color="primary">Details</Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default MyDataSection;
