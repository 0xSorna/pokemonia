import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <Link className="navbar-brand mx-auto font-weight-bold" to="/">POKMONIA</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pokemons">Pokemons</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/types">Types</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
