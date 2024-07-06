import React from 'react';

interface CardProps {
  selectedText: string;
}

const Card: React.FC<CardProps> = ({ selectedText }) => {
  return (
    <div className="card">
      <h4>Selected Text:</h4>
      <p>{selectedText}</p>
    </div>
  );
};

export default Card;