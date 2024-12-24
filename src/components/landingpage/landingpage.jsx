import React from 'react';
import './landingpage.css';

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero-section text-center text-white">
        <div className="container">
          <h1 className="display-4">Welcome to POKMONIA</h1>
          <p className="lead">Discover and explore your favorite Pokémon</p>
          <a href="/pokemons" className="btn btn-primary btn-lg mt-3">Start Exploring</a>
        </div>
      </section>
      <section className="features-section text-center my-5">
        <div className="container">
          <h2 className="mb-4">Features</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-card">
                <h3>Browse Pokémon</h3>
                <p>View detailed information about various Pokémon including their stats and abilities.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <h3>Explore Types</h3>
                <p>Learn about different Pokémon types and their strengths and weaknesses.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <h3>Check Your Profile</h3>
                <p>Manage your favorite Pokémon and track your progress in the game.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section text-center my-5">
        <div className="container">
          <h2 className="mb-4">About Us</h2>
          <p className="lead">POKMONIA is your ultimate destination for all things Pokémon. From browsing Pokémon to learning about types, we have it all!</p>
        </div>
      </section>
      <footer className="text-center py-4 bg-dark text-white">
        <p>&copy; 2024 POKMONIA. All rights reserved.</p>
      </footer>
    </div>
  );
};
