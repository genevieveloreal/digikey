import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import SectionHeader from "./SectionHeader";
import Grid from "@material-ui/core/Grid";
import govhackLogo from "../images/govhack.png";
import infoSysLogo from "../images/infosys.png";
import qldGovLogo from "../images/qldgovt.png";
import vicGovLogo from "../images/vicgovt.png";
import pernixLogo from "../images/pernix.png";

function ClientsSection(props) {
  const items = [
    {
      name: "GovHack",
      image: govhackLogo,
      width: "90px",
    },
    {
      name: "Victoria State Government",
      image: vicGovLogo,
      width: "145px",
    },
    {
      name: "Queensland State Government",
      image: qldGovLogo,
      width: "75px",
    },
    {
      name: "InfoSys",
      image: infoSysLogo,
      width: "170px",
    },
    {
      name: "Pernix",
      image: pernixLogo,
      width: "180px",
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
        <Box textAlign="center">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={4}
            textAlign="center"
          />
          <Grid container={true} justify="center">
            {items.map((item, index) => (
              <Grid item={true} xs={12} md="auto" key={index} justifyContent="center" alignItems="center">
                <Box py={2} px={3}>
                  <img src={item.image} width={item.width} alt={item.name} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Section>
  );
}

export default ClientsSection;
