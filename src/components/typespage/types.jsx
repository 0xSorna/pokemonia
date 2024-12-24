import React, { useEffect, useState } from 'react';
import { BiQuestionMark } from 'react-icons/bi';
import { FaBolt, FaFire, FaGhost, FaLeaf, FaMoon, FaRegStar, FaWater } from 'react-icons/fa';
import {
  GiCrystalBall,
  GiDragonHead, GiFairyWand, GiFist,
  GiFly,
  GiNestBirds,
  GiPoisonBottle, GiPsychicWaves, GiRock
} from 'react-icons/gi';
import { IoIceCream } from 'react-icons/io5';
import { useTitle } from '../../hooks/useTitle';
import './types.css';

// Map Pokémon types to FontAwesome or custom icons
const typeIcons = {
  fire: <FaFire />,
  water: <FaWater />,
  grass: <FaLeaf />,
  electric: <FaBolt />,
  ghost: <FaGhost />,
  rock: <GiRock />,
  bug: <GiFly />,
  flying: <GiNestBirds />,
  poison: <GiPoisonBottle />,
  ground: <GiRock />,
  steel: <GiCrystalBall />,
  psychic: <GiPsychicWaves />,
  ice: <IoIceCream />,
  dragon: <GiDragonHead />,
  dark: <GiPoisonBottle />,
  fairy: <GiFairyWand />,
  normal: <FaMoon />,
  fighting: <GiFist />,
  stellar: <FaRegStar />,
  unknown: <BiQuestionMark />
};

export const Types = () => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useTitle('Pokémon Types');

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type');
        const data = await response.json();
        setTypes(data.results);
      } catch (err) {
        setError('Failed to load types');
      } finally {
        setLoading(false);
      }
    };

    fetchTypes();
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Pokémon Types</h1>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="text-center text-danger">{error}</div>
      ) : (
        <div className="row">
          {types.map((type) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={type.name}>
              <div className={`type-card ${type.name}`}>
                <div className="type-icon">
                  {typeIcons[type.name] || <FaRegStar />}
                </div>
                <h3>{type.name.charAt(0).toUpperCase() + type.name.slice(1)}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
