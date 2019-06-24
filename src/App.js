import React from 'react';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

class App extends React.Component {

  render() {

    let classes = useStyles();

    return (
      <Button variant="contained" color="primary" className={classes.button}>
        Hello World
      </Button>
    );
  }
}

export default App;