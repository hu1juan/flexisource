import React, { useContext } from 'react';
import './commons.scss';
import { Link } from 'react-router-dom';
import { ListPageContext } from '../../contexts/ListPageContext';

const Card = (props) => {
  const { dispatch } = useContext(ListPageContext);
  const { el } = props;

  const handleViewDetails = (id) => {
    dispatch({ type: 'SELECT_SINGLE', id })
  }
  return (
    <div className='card-container'>
      <img src={require('../../assets/' + el.thumb)} alt={el.slug} />
      <p>{el.title_long}</p>
      <div onClick={() => { handleViewDetails(el.id) }}>
        <Link to={`/${el.slug}`}>
          <span>------</span>
          <span>VIEW CASE STUDY</span>
        </Link>
      </div>
    </div >
  );
}

export default Card;