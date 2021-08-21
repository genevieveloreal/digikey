import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "./SectionHeader";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },

    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(3)}px`,
    },
  },
  figure: {
    maxWidth: 300,
    margin: "30px auto",
  },
  image: {
    height: "auto",
    maxWidth: "100%",
  },
}));

function FeaturesSection(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Store and share your data securely",
      description:
        "Store your data in one place. Have peace of mind knowing your data is encrypted and that you can customise data you share, so you only share what you need to.",
      image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg",
    },
    {
      title: "Stay up to date with public health information",
      description:
        "Checking Government websites is time consuming, especially if you need to travel between states. See all relevant information at once, including COVID-19 warnings and any restrictions, in your DigiKey dashboard.",
      image: "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
    },
    {
      title: "Receive notifications",
      description:
        "Don't spend every morning checking contact tracing lists. We'll let you know if you've been in an area concern, and if you need to get tested.",
      image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg",
    },
    {
      title: "Live your life, yo!",
      description:
        "You can relax knowing you have complete control over your data, and easy access to the information you need. Simply keep your details updated and we'll take care of the rest.",
      image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg",
    },
  ];

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
        <Container
          maxWidth="md"
          disableGutters={true}
          className={classes.itemsContainer}
        >
          {items.map((item, index) => (
            <Grid
              className={classes.row}
              container={true}
              item={true}
              alignItems="center"
              spacing={4}
              key={index}
            >
              <Grid item={true} xs={12} md={6}>
                <Box
                  textAlign={{
                    xs: "center",
                    md: "left",
                  }}
                >
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <figure className={classes.figure}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={classes.image}
                  />
                </figure>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
