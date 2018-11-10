import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import './App.css';
import apiKey from './config.js';

import Home from './components/Home';
import Search from './components/Search';

class App extends Component {
  state = {
    photos: [],
    tag: 'durango%2C+silverton%2C+ouray'
  }

  performSearch = this.performSearch.bind(this);

  componentDidMount() {
    this.performSearch(this.state.tag);
  }

  performSearch(query) {
    this.setState({ tag: query });
    axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then( response => {
        // handle success
        this.setState({ photos: response.data.photos.photo });
      })
      .catch( error => {
        // handle error
        console.error(error);
      })
  }

  render() {
    return (
      <Router>
        <div className="container app">
          <Switch>
            <Route exact path="/" render={ () => <Home photos={this.state.photos} handleSearch={this.performSearch} /> } />
            <Route path="/search/:tag" render={ props => <Search {...props} photos={this.state.photos} handleSearch={this.performSearch} /> } />
            {/*<Route path="/cats" component={About} />*/}
          </Switch>
          {/* <Gallery /> */}
        </div>
      </Router>
    );
  }
}

export default App;
