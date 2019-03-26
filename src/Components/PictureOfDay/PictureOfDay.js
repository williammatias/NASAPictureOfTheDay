import React, { Component } from "react";
import moment from "moment";

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

class PictureOfDay extends Component {
  constructor(props) {
    super(props);
    this.props.loadNASAPictureOfDay();
  }
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
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
            title={this.props.pictureOfDay.title}
            subheader={moment(this.props.pictureOfDay.date).format(
              "MMMM DD, YYYY"
            )}
          />
          <CardMedia
            image={this.props.pictureOfDay.url}
            component="img"
            alt={this.props.pictureOfDay.title}
            title={this.props.pictureOfDay.title}
          />
          <CardContent>
            <Typography component="p">
              {this.props.pictureOfDay.explanation}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{this.props.pictureOfDay.title}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default PictureOfDay;
