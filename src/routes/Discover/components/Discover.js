import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { getCategories, getFeaturedPlaylists, getThisWeek } from '../../../utils/SpotifyUtil';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
      token: null
    };
  }

  componentDidMount() {
    const token = sessionStorage.getItem("@token")
    getThisWeek(token)
      .then(res => this.setState({ newReleases: res.albums.items }))
      .catch(console.log)
    getFeaturedPlaylists(token)
      .then(res => this.setState({ playlists: res.playlists.items }))
      .catch(console.log)
    getCategories(token)
      .then(res => this.setState({ categories: res.categories.items }))
      .catch(console.log)
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
