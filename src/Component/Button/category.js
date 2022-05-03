import React from 'react'
import {Link} from 'react-router-dom';
import './category.css'
import rucika from '../../Asset/Images/1.jpg'
import { Row ,Col,Card} from 'react-bootstrap';
import CardList from '../Card/card-list';
import Data from '../../Helper/Api/data.json'

const TagButton = ({name}) => {
  
  return <button>{name}</button>
}


export default TagButton;
