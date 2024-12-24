import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import './pokedetails.css';

export const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error('Failed to fetch Pokémon details');
        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError('Failed to load Pokémon details');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  
  if (loading) return <div className="text-center"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  if (error) return <div className="text-center text-danger">{error}</div>;
  
  if (!pokemon) return null;
  
  useTitle(`${pokemon.name} - Pokémon Details`);
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <div className="pokemon-detail-card">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={pokemon.name}
          className="pokemon-image"
        />
        <div className="pokemon-info">
          <h2>Base Stats</h2>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                <strong>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}:</strong> {stat.base_stat}
              </li>
            ))}
          </ul>
          <h2>Abilities</h2>
          <ul>
            {pokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>
                {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}
              </li>
            ))}
          </ul>
          <h2>Types</h2>
          <ul className="pokemon-types">
            {pokemon.types.map((type) => (
              <li key={type.type.name} className={type.type.name}>
                {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
