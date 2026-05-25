import { useSelector } from 'react-redux';
import CarList from '../../components/CarList/CarList';
import { selectFavorites } from '../../redux/selectors';
import css from './FavoritesPage.module.css';

const Favorites = () => {
  const { favorites } = useSelector(selectFavorites);
  return (
    <div className={css.container}>
      {favorites.length === 0 ? (
        <p className={css.empty}>
          No favorites yet. Add some cars to your favorites!
        </p>
      ) : (
        <CarList data={favorites} />
      )}
    </div>
  );
};

export default Favorites;
