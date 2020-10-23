import React from 'react';
import './styles.css';

type Props = {
  text: string;
  path?: string
}

const Button = ({ text, path }: Props) => (
   <a href={path} target="blank">
    <button className="btn-button">
      <p className="btn-button-text">{text}</p>
    </button>
  </a>
);

export default Button;
  