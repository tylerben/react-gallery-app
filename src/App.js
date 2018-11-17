import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios';
import './App.css';
import apiKey from './config.js';

import Search from './components/Search';
import NotFound from './components/NotFound';

class App extends Component {

  state = {
    photos: [],
    tag: 'durango%2C+silverton%2C+ouray',
    loading: true,
    title: 'Results for Durango, Silverton, and Ouray'
  }

  performSearch = this.performSearch.bind(this);

  componentDidMount() {
    // Grab the current url
    // if the user has reloaded the page on a search route
    // perform the search passing the route to the performSearch method
    // Else if the user is on the "home" page use the search tag defined in the initial state
    let path = window.location.pathname;
    if ( this.state.photos.length === 0 && path !== "/" ) {
      let tag = path.replace("/search/", "");
      this.performSearch(tag);
    } else {
      this.performSearch(this.state.tag);
    }
  }

  /**
   * This method is used to replace the %20 special character with a space when displaying the search results title
   * @param  {string} tag [search tag]
   * @return {string}     [search tag with %20 replaced with a space]
   */
  parseTitle(tag) {
    return tag.replace('%20',  ' ');
  }

  /**
   * This method is used to request data from the Flickr API
   * After the data is request, regardless if it was successful or not, the state is updated to reflect the search tag
   * @param  {string} tag [search tag]
   */
  performSearch(tag) {
    this.setState({ loading: true });
    axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
      .then( response => {
        // handle success
        this.setState({ photos: response.data.photos.photo });
      })
      .catch( error => {
        // handle error
        console.error(error);
      })
      .then( response => {
        this.setState({
          tag: tag,
          loading: false,
          title: `Results for ${this.parseTitle(tag)}`
        });
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container app">
          <Switch>
            <Route exact
                   path="/"
                   render={ props =>
                    <Search {...props}
                      photos={this.state.photos}
                      loading={this.state.loading}
                      title={this.state.title}
                      handleSearch={this.performSearch} />
                    } />
            <Route path="/search/:tag"
                   render={ props =>
                     <Search {...props}
                      photos={this.state.photos}
                      loading={this.state.loading}
                      title={this.state.title}
                      handleSearch={this.performSearch} />
                    } />
            <Route component={NotFound} />
          </Switch>
          {/* <Gallery /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
