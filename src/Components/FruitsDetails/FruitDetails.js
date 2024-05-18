import React from 'react'
import { useParams } from 'react-router-dom'
import { getFruitsData } from '../../Data/FruitData'
const FruitDetails = () => {
  const { id } = useParams()
  const fruit = getFruitsData().find(fruit => {
    return (fruit.id === id)
  })
  const {name, description} = fruit;
    return (
        <div className="fruit-details">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      );
}
export default FruitDetails;
