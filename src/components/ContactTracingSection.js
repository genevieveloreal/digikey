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
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead, TablePagination,
  TableRow, TextField
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    padding: theme.spacing(3),
  },
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 880,
  },
  suburbSearch: {
    marginLeft: "8px"
  },
  stateSelect: {
    marginTop: 16
  }

}));

function ContactTracingSection(props) {
  const router = useRouter();
  const classes = useStyles();



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
    setSuburbName('');
    setLocationState(states[newLocationState]);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [suburbName, setSuburbName] = useState("Melbourne");
  const [rowData, setRowData] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const tableHead = [
    { id: 'date', label: 'Date', midWidth: 170},
    { id: 'place', label: 'Place', midWidth: 170},
    { id: 'suburb', label: 'Suburb', midWidth: 170},
    { id: 'start', label: 'Start of Exposure', midWidth: 170},
    { id: 'end', label: 'End of Exposure', midWidth: 170},
  ]

  const createTableDate = (row) => {
    return {
      date: row['Date'],
      place: row['Place'],
      suburb: row['Suburb'],
      start: row['Start of exposure'],
      end: row['End of exposure']
    }
  }



  useEffect(() => {
    const query = suburbName ? suburbName.toLowerCase() : ''; // work around for endpoint being crap.
    fetch(`/api/tracing/${locationState.toLowerCase()}/${query}`)
      .then((res) => res.json())
      .then((data) => {
        const fetchedRowData = data.map((row) => createTableDate(row));
        setRowData(fetchedRowData);
      })
  }, [suburbName, locationState])

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
                      <Select label={"State"} labelId="label" id="select" onChange={handleLocationStateChange} value={locationState} className={classes.stateSelect}>
                        <MenuItem value="VIC">VIC</MenuItem>
                        <MenuItem value="QLD">QLD</MenuItem>
                        <MenuItem value="ACT" disabled={true}>ACT</MenuItem>
                        <MenuItem value="NSW" disabled={true}>NSW</MenuItem>
                        <MenuItem value="NT" disabled={true}>NT</MenuItem>
                        <MenuItem value="SA" disabled={true}>SA</MenuItem>
                        <MenuItem value="TAS" disabled={true}>TAS</MenuItem>
                        <MenuItem value="WA" disabled={true}>WA</MenuItem>
                      </Select>
                        <TextField label={"Suburb"} value={suburbName} ml={2} onChange={(e) => setSuburbName(e.target.value)} className={classes.suburbSearch}></TextField>


                    </div>
                    <br/>
                  </Typography>
                </Box>

              </CardContent>
            </Card>

          </Grid>
          <Grid item={true} xs={12} md={12}>
            <Paper className={classes.root}>
              <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {tableHead.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {tableHead.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number' ? column.format(value) : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rowData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default ContactTracingSection;
