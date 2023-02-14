import React, { Component } from 'react';
import ItemCard from './ItemCard';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestMusic: []
    };
  }

  componentDidMount() {
    fetch('/api/latest-music')
      .then(response => response.json())
      .then(data => {
        this.setState({
          latestMusic: data.results
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="cards">
        {this.state.latestMusic.map(music => (
          <ItemCard
            key={music.trackId}
            albumImage={music.artworkUrl100}
            trackName={music.trackName}
            artistName={music.artistName}
          />
        ))}
      </div>
    );
  }
}

export default Home;
