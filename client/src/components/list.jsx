import React from 'react';
import { render } from 'react-dom';
import Card from './card.jsx'
import $ from 'jquery';
import Grid from 'material-ui/Grid';
import projects from '../projects/template.js'

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={24}>
            {projects.map(value => (
              <Grid key={value.key} item>
                <Card details={value}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}