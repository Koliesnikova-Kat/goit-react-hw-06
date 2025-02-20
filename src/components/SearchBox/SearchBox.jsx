import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBox.module.css';
import { setNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleFilterChange = (event) => dispatch(setNameFilter(event.target.value));

  return (
    <div className={styles.container}>
      <p>Find contacts by name</p>
      <input
        className={styles.input}
        type='text'
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
