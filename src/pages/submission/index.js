import React, { PureComponent } from "react";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Submission extends PureComponent {
  state = {};

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography type="display1" style={{ marginBottom: 40 }}>
          Submit
        </Typography>

        <form className={classes.container} noValidate autoComplete="off">
          <input
            accept="image/*"
            className={classes.input}
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button raised component="span" className={classes.button}>
              Upload solutions
            </Button>
          </label>

          <Button raised color="primary" className={classes.button}>
            Send
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Submission);
