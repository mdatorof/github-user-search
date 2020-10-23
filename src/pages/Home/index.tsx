import React from 'react';
import Button from 'core/components/Button';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => (
    <div className="home-container">
        <p className="home-title">
            Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
        </p>
        <p className="home-subtitle">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br /> <br />
            Favor observar as instruções passadas no capítulo sobre a elaboração <br />  
            deste projeto. <br /> <br />
            Este design foi adaptado a partir de Ant Design System for Figma, de  <br /> 
            Mateusz Wierzbicki:
            <a href="mailto:antforfigma@gmail.com"> antforfigma@gmail.com</a>
        </p>
        <Link to="/search">
            <Button text="Começar" />
        </Link>
    </div>
);

export default Home;
