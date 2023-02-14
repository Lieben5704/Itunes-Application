import React from 'react';
import ItemCard from './ItemCard';

const FavoritesPage = (props) => {
  return (
    <div className="favorites-page">
      <h2>Favorites</h2>
      <ul>
        {props.favorites.map((favorite, index) => (
          <li key={index}>
            <ItemCard
              albumImage={favorite.albumImage}
              trackName={favorite.trackName}
              artistName={favorite.artistName}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
