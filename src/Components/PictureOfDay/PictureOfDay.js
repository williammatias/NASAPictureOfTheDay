import React, { useEffect, useState } from "react";

import moment from "moment";
import fetch from "cross-fetch";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./PictureOfDay.css";

export function PictureOfDay() {
  const [pictureOfDay, setData] = useState({ pictureOfDay: {} });
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=l2g7qnlNSUHY9D4tEu0JmVLOPsLY9ICb7uJOuZ2i`
    )
      .then(
        response => {
          return response.json();
        },
        error => console.log("An error occurred.", error)
      )
      .then(json => {
        console.log(json);
        setData(pictureOfDay: json);
      });
  });

  // loadNASAPictureOfDay();
  // state = { expanded: false };

  // handleExpandClick = () => {
  //   this.setState(state => ({ expanded: !state.expanded }));
  // };
  return (
    <div className="App">
      <Card className="card">
        <CardHeader
          avatar={<Avatar aria-label="Recipe">R</Avatar>}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={pictureOfDay.title}
          subheader={moment(pictureOfDay.date).format("MMMM DD, YYYY")}
        />
        <CardMedia
          image={pictureOfDay.url}
          component="img"
          alt={pictureOfDay.title}
          title={pictureOfDay.title}
        />
        <CardContent>
          <Typography component="p">{pictureOfDay.explanation}</Typography>
        </CardContent>
        <CardActions disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Collapse timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{pictureOfDay.title}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
