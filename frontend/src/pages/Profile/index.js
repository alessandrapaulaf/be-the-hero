import React from 'react';
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import './styles.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="be the hero"/>
        <span>Bem vinda, Apad</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#e02041"/>
        </button>
      </header>
    </div>
  );
}