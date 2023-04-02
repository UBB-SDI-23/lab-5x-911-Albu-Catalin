import { Card } from '@mui/material';
import styles from './BookCard.module.css';

const BookCard = ({ title, authors }: any) => {
  return (
    <Card className={styles['card']}>
      <h3>{title}</h3>
      <div>
        {authors.map((a: any) => (
          <p key={a._id}>{a.name}</p>
        ))}
      </div>
    </Card>
  );
};

export default BookCard;
