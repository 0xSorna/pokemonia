import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './favorites.css';

export const Favorites = () => {
    const [favorites, setFavorites] = React.useState(
        JSON.parse(localStorage.getItem('favoritePokemons')) || []
    );

    const handleDelete = (id) => {
        const updatedFavorites = favorites.filter(pokemon => pokemon.id !== id);
        localStorage.setItem('favoritePokemons', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
    };

    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Favorite Pokémon</h1>
            <div className="row">
                {favorites.length > 0 ? (
                    favorites.map((pokemon) => (
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={pokemon.id}>
                            <div className="card shadow-sm hover-effect">
                                <Link to={`/pokemons/${pokemon.id}`} className="card-link">
                                    <img
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                                        alt={pokemon.name}
                                        className="card-img-top"
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{pokemon.name}</h5>
                                    </div>
                                </Link>
                                <button 
                                    onClick={() => handleDelete(pokemon.id)} 
                                    className="delete-button"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No favorite Pokémon found.</p>
                )}
            </div>
        </div>
    );
};
