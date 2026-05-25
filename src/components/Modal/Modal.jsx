import { useEffect } from 'react';
import sprite from '../../images/sprite.svg';
import Button from '../Button/Button';
import css from './Modal.module.css';

const Modal = ({ car, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <div className={css.backdrop} onClick={onClose}></div>
      <div className={css.modal}>
        <div className={css.content}>
          <button type="button" className={css.closeBtn} onClick={onClose}>
            <svg width="24" height="24" className={css.closeIcon}>
              <use href={sprite + '#icon-x'}></use>
            </svg>
          </button>
          <img
            data-ci-make={car.make}
            data-ci-model={car.model}
            data-ci-year={car.year}
            alt={`${car.make} ${car.model}`}
            width={461}
            height={248}
            className={css.image}
          />
          <h2 className={css.title}>
            {car.make} <span>{car.model}</span>, {car.year}
          </h2>
          <ul className={`${css.list} ${css.info}`}>
            <li>{car.address.split(',')[1]}</li>
            <li>{car.address.split(',')[2]}</li>
            <li>Id: {car.id}</li>
            <li>Year: {car.year}</li>
            <li>Type: {car.type}</li>
            <li className={css.break}></li>
            <li>Fuel Consumption: {car.fuelConsumption}</li>
            <li>Engine Size: {car.engineSize}</li>
          </ul>
          <p className={css.descr}>{car.description}</p>
          <h3 className={css.subtitle}>Accessories and functionalities:</h3>
          <ul className={`${css.list} ${css.details}`}>
            {car.accessories.map((accessory, index) => (
              <li key={index}>{accessory}</li>
            ))}
            <li className={css.break}></li>
            {car.functionalities.map((functionality, index) => (
              <li key={index}>{functionality}</li>
            ))}
          </ul>
          <h3 className={css.subtitle}>Rental Conditions:</h3>
          <ul className={css.conditions}>
            <li className={css.condition}>
              Minimum age:{' '}
              <span>{car.rentalConditions.split('\n')[0].split(': ')[1]}</span>
            </li>
            <li className={css.condition}>
              {car.rentalConditions.split('\n')[1]}
            </li>
            <li className={css.condition}>
              {car.rentalConditions.split('\n')[2]}
            </li>
            <li className={css.condition}>
              Mileage:{' '}
              <span>{Number(car.mileage).toLocaleString('en-US')}</span>
            </li>
            <li className={css.condition}>
              Price: <span>{car.rentalPrice}</span>
            </li>
          </ul>
          <a href="tel:+380730000000" className={css.btnContainer}>
            <Button>Rental car</Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Modal;
