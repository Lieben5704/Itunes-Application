import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SideBar(props) {
    return (
        <div className="sidebar">
            <h3 style={{ textAlign: 'center'}}>Favorites</h3>
            <ul>
                {props.favorites.map((favorite, index) => (
                    <li key={index}>
                        <img src={favorite.albumImage} alt={favorite.trackName} />
                        <p>{favorite.trackName} by {favorite.artistName}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideBar;
