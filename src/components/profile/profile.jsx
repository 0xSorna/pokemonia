import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import './profile.css';
import pic from '../../assets/image.png'

export const Profile = () => {

    useTitle('Profile');
  return (
    <div className="container my-4">
      <div className="profile-card">
        <div className="profile-header">
          <img src={pic} alt="Profile Picture" className="profile-picture" />
          <h1 className="username">Sorna</h1>
        </div>
        <p className="bio">Hello! I’m a Pokémon enthusiast and a developer. I love creating apps and exploring new Pokémon worlds.</p>
      </div>
    </div>
  );
};
