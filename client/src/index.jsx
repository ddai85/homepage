import React from 'react';
import { render } from 'react-dom';
import Header from './components/header.jsx';
import List from './components/list.jsx';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Video from './components/vidplayer.jsx';

import deepOrange from 'material-ui/colors/deepOrange';
import lightBlue from 'material-ui/colors/lightBlue';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: deepOrange,
  },
  status: {
    danger: 'red',
  },
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Header/>
        </div>
        <div>
          <List/>
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('app'));
