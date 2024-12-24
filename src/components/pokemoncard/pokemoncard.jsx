import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './pokemoncard.css';

export const PokemonCard = ({ pokemon, idx }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favoritePokemons = JSON.parse(localStorage.getItem('favoritePokemons')) || [];
        const isPokemonFavorite = favoritePokemons.some(p => p.id === idx);
        setIsFavorite(isPokemonFavorite);
    }, [idx]);

    const handleFavoriteToggle = () => {
        let favoritePokemons = JSON.parse(localStorage.getItem('favoritePokemons')) || [];
        const isPokemonFavorite = favoritePokemons.some(p => p.id === idx);

        if (isPokemonFavorite) {
            favoritePokemons = favoritePokemons.filter(p => p.id !== idx);
        } else {
            favoritePokemons.push({ id: idx, name: pokemon.name });
        }

        localStorage.setItem('favoritePokemons', JSON.stringify(favoritePokemons));
        setIsFavorite(!isPokemonFavorite);
    };

    return (
        <Link to={`/pokemons/${idx}`} className="card-link">
            <div className="card shadow-sm hover-effect">
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx}.png`}
                    alt={pokemon.name}
                    className="card-img-top"
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            handleFavoriteToggle();
                        }}
                        className={`favorite-button ${isFavorite ? 'favorite' : ''}`}
                    >
                        {isFavorite ? <FaHeart /> : <FaRegHeart />}
                    </button>
                </div>
            </div>
        </Link>
    );
};
