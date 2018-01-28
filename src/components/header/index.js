import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

import { Link } from "react-router-dom";

const styles = {
  root: {
    width: "100%"
  },
  flex: {
    flex: 1
  }
};

const Header = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            <Link to="/">PyCon Nove</Link>
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
