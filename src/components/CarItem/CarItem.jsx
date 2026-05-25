import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../images/sprite.svg';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';
import { selectFavorites } from '../../redux/selectors';
import Button from './../Button/Button';
import Modal from './../Modal/Modal';
import css from './CarItem.module.css';

const CarItem = ({ car }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);

  const isChecked = favorites.favorites.some(({ id }) => id === car.id);

  const handleHeartClick = () => {
    if (isChecked) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <>
      <li className={css.item}>
        <div className={css.imageWrap}>
          <img
            data-ci-make={car.make}
            data-ci-model={car.model}
            data-ci-year={car.year}
            alt={`${car.make} ${car.model}`}
            width={274}
            height={268}
            className={css.image}
          />
          <button
            className={`${css.heartBtn} ${isChecked ? css.checked : ''}`}
            onClick={handleHeartClick}
          >
            <svg width="18" height="18" className={css.icon}>
              <use href={sprite + '#icon-heart-white'}></use>
            </svg>
          </button>
        </div>
        <div className={css.titleWrap}>
          <h2 className={css.title}>
            {car.make} <span>{car.model}</span>, {car.year}
          </h2>
          <p>{car.rentalPrice}</p>
        </div>
        <ul className={css.info}>
          <li>{car.address.split(', ')[1]}</li>
          <li>{car.address.split(', ')[2]}</li>
          <li>{car.rentalCompany}</li>
          <li className={css.break}></li>
          <li>{car.type}</li>
          <li>{car.model}</li>
          <li>{car.mileage}</li>
          <li>{car.accessories[0]}</li>
        </ul>
        <Button onClick={openModal}>Learn more</Button>
      </li>
      {isModalOpen && <Modal car={car} onClose={closeModal} />}
    </>
  );
};

export default CarItem;
