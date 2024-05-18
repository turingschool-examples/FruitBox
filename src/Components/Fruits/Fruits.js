import './Fruits.css';
import { getFruitsData } from '../../Data/FruitData';
import { Link, Outlet } from 'react-router-dom';

const Fruits = () => {
  const fruits = getFruitsData().map(fruit => {
    const { id, name } = fruit;
    return (
      <Link to={`/fruits/${id}`} key={id}>
        <div className="fruit-item">{name}</div>
      </Link>
    );
  });

  return (
    <>
      <div className="fruit-list">{fruits}</div>
      <Outlet />
    </>
  );
}

export default Fruits;