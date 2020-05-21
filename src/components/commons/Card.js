import React from 'react';
import './commons.scss';

const Card = (props) => {
  const { el } = props;
  return (
    <div className='card-container'>
      <img src={require('../../assets/' + el.thumb)} alt={el.slug} />
      <p>{el.title_long}</p>
      <div>
        <span>------</span>
        <span>VIEW CASE STUDY</span>
      </div>
    </div>
  );
}

export default Card;