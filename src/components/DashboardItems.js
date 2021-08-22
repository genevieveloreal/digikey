import React, { useState, Fragment } from "react";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import EditItemModal from "./EditItemModal";
import { spacing } from '@material-ui/system';
import { useAuth } from "./../util/auth.js";
import { updateItem, deleteItem, useItemsByOwner } from "./../util/db.js";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  paperItems: {
    minHeight: "300px",
  },
  featured: {
    backgroundColor:
      theme.palette.type === "dark" ? theme.palette.action.selected : "#fdf8c2",
  },
  starFeatured: {
    color: theme.palette.warning.main,
  },
}));

function DashboardItems(props) {
  const classes = useStyles();

  const auth = useAuth();

  const [creatingItem, setCreatingItem] = useState(false);
  const [updatingItemId, setUpdatingItemId] = useState(null);

  let items = [
    { id: 1, title: "Name", info: "test", featured: false },
    { id: 2, title: "Address", info: "test", featured: false },
    { id: 3, title: "Phone number", info: "test", featured: false },
    { id: 4, title: "Vaccination data", info: "test", featured: false },
    { id: 5, title: "TFN", info: "test", featured: false }
  ];

  const [dataItems, setDataItems] = useState(items);
  const [wastewaterItems, setWasteWaterItems] = useState(undefined);
  const [status, setStatus] = useState(false);

  const deleteItem = (id) => {
    const newItems = dataItems.filter(item => item.id !== id);
    setDataItems(newItems);
  };

  const createItem = (data) => {
    const newItems = dataItems;
    newItems.push(data);
    setDataItems([...newItems]);
    setCreatingItem(false);
  };

  let wastewaterLocations = [];

  React.useEffect(()=> {
    wastewaterLocations = fetch('/api/wastewater/qld')
      .then((res) => res.json())
      .then((res) => { setWasteWaterItems(res); setStatus(true);} )
  }, [])

  let lastLocation;
  if (status) {
    lastLocation = wastewaterItems.pop()
  }


  const dataItemsLength = dataItems.length;

  return (
    <>
      <Box mb={1}>
         <Alert severity="error">You recently visited <strong>Bunnings Carseldine</strong> on <strong>21 August 2021 (11:05AM)</strong>. Please get tested at your nearest COVID-19 testing location.</Alert>
        <br />
        { props.locationState === "QLD" && status &&  <Alert severity="warning">COVID-19 has been detected in your area ({ lastLocation.Site }). Stay safe and if you have any symptoms, please get tested.</Alert> }
      </Box>
      <Box mb={2}>
        <Card>
          <CardContent>
            <Typography variant="h6" paragraph={true}>
              <strong>Welcome back, Govhacker!</strong>
            </Typography>
            <Typography>
              Your DigiKey account gives you control over your data, including what you share and who you share it with.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Paper className={classes.paperItems}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={2}
        >
          <Typography variant="h5">Your DigiKey Data</Typography>
        </Box>
        <Divider />
        {dataItems && dataItems.length > 0 && (
          <List variant="flush">
            <ListItem>
              <ListItemIcon>
                <MyLocationIcon />
              </ListItemIcon>
              <ListItemText><strong>Current Location: {props.locationState}</strong></ListItemText>
            </ListItem>
            <Divider />
            {dataItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <VpnKeyIcon />
                </ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                  <Box>
                    <Button button color="primary" variant="contained">
                      <EditIcon />
                    </Button>
                  </Box>
                  <Box ml={1}>
                    <Button button color="secondary" variant="contained" ml={2} onClick={() => deleteItem(item.id)}>
                      <DeleteIcon />
                    </Button>
                  </Box>
                <Divider />
              </ListItem>
            ))}
            <Divider />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding={2}
            >
              <ListItemText>Add new</ListItemText>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                onClick={() => setCreatingItem(true)}
              >
              +
              </Button>
          </Box>
          </List>
        )}
      </Paper>

      <Box mt={4}>
      <Card>
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" paragraph={true}>
            <strong>Check-In History</strong>
          </Typography>
          <Typography variant="body1">Review your previous check-in locations and data sharing</Typography><br/>
          <Button color="primary" variant="outlined" href="/my-data">Check-in History</Button>
        </CardContent>
      </Card>
      </Box>

      {creatingItem && <EditItemModal dataItemsLength={dataItemsLength} saveNewDataCallback={createItem} onDone={() => setCreatingItem(false)} />}

      {updatingItemId && (
        <EditItemModal
          id={updatingItemId}
          onDone={() => setUpdatingItemId(null)}
        />
      )}
    </>
  );
}

export default DashboardItems;
