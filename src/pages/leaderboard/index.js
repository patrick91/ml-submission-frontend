import React, { PureComponent } from "react";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import GradeIcon from "material-ui-icons/Grade";

const styles = theme => ({});

const winners = ["Valerio Maggio", "Ernesto Arbitrio"];

class Leaderboard extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography type="display1" style={{ marginBottom: 40 }}>
          Leaderboard
        </Typography>

        {winners.map(x => (
          <ListItem key={x}>
            <ListItemIcon>
              <GradeIcon />
            </ListItemIcon>
            <ListItemText primary={x} />
          </ListItem>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Leaderboard);
