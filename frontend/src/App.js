import React, { Component } from "react";
import ItemCard from "./Components/ItemCard";
import { Form, Navbar, Button, Container, Nav } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize component state with an empty array for 'results',
    // an empty array (or parsed favorites from local storage) for 'favorites',
    // and empty strings for 'term' and 'entity'
    this.state = {
      results: [],
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
      term: "",
      entity: "",
    };
    // Bind the 'handleSubmit' and 'handleAddToFavorites' methods to 'this'
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
  }

  // Update the 'favorites' array in local storage whenever the component updates
  componentDidUpdate() {
    localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
  }

  // Remove an item from the 'favorites' array based on the index passed as an argument
  handleRemoveFromFavorites(index) {
    let favorites = this.state.favorites.slice();
    favorites.splice(index, 1);
    this.setState({ favorites });
  }

  // Handle the form submission by fetching data from the iTunes API based on the search query
  // and updating the 'results' array in component state with the fetched data
  handleSubmit(e) {
    e.preventDefault();
    fetch(`/api/search?term=${this.state.term}&entity=${this.state.entity}`)
      .then((res) => res.json())
      .then((data) => this.setState({ results: data.results }))
      .catch((err) => console.error(err));
  }

  // Add an item to the 'favorites' array in component state
  handleAddToFavorites(result) {
    this.setState((prevState) => ({
      favorites: [...prevState.favorites, result]
    }));
  }
  

  render() {
    return (
      
      <div className="main">
      {/* The navigation bar */}
      <Navbar bg="secondary" expand="lg" className='fixed-top'>
        <Container fluid>
          <Navbar.Brand href="http://localhost:3000/" style={{color: "white"}}>ITunes Search</Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            {/* The search form */}
            <Form className="d-flex" onSubmit={this.handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                name="term"
                value={this.state.term} 
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <Form.Control
                as="select"
                className="me-2"
                name="entity"
                value={this.state.entity}
                onChange={(e) => this.setState({ entity: e.target.value })}
              >
                <option value="">Select Criteria</option>
                <option value="musicTrack">Music</option>
                <option value="ebook">Book</option>
                <option value="software">Software</option>
              </Form.Control>
              <Button type="submit" variant="outline-success" style={{color: "white", border: "1px solid white"}}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* The search results */}
      <div className="cards" style={{ maxWidth: '80%' }}>
        {this.state.results.map((result) => (
          <ItemCard
            key={result.trackId}
            albumImage={result.artworkUrl100}
            trackName={result.trackName}
            artistName={result.artistName}
            handleAddToFavorites={this.handleAddToFavorites}
          />
        ))}
      </div>
      {/* The favorites list */}
      <div className="sidebar">
        <h2>Favorites</h2>
        <ul>
          {this.state.favorites.map((favorite, index) => (
            <li key={favorite.trackId}>
              {favorite.trackName} by {favorite.artistName}
              <button size="sm" style={{ border: "none", color: "red" }} onClick={() => this.handleRemoveFromFavorites(index)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    );
  }
}

export default App;
