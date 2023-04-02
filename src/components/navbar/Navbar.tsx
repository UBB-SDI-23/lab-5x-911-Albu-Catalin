import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles['navbar']}>
      <span>Book Library</span>
      <nav className={styles['navigation']}>
        <Link className={styles['link']} to={'/publishingHouses'}>
          Publishing Houses
        </Link>
        <a className={styles['link']}>Authors</a>
        <a className={styles['link']}>Books</a>
        <Link className={styles['link']} to={'/reports'}>
          Reports
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
