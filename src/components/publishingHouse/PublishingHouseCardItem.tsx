import { Button, Card } from '@mui/material';
import styles from './PublishingHouseCardItem.module.css';
import { Link, useNavigate } from 'react-router-dom';

const PublishingHouseCardItem = ({ id, name, website, phoneNumber }: any) => {
  const navigate = useNavigate();
  return (
    <Card className={styles.card}>
      <Link to={'/publishingHouses/' + id}>
        <h3>{name}</h3>
      </Link>
      <a href={website}>{website}</a>
      <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      <Button
        variant="outlined"
        color="error"
        onClick={async () => {
          await fetch(`${import.meta.env.VITE_API_URL}publishingHouses/${id}`, {
            method: 'DELETE',
          });
          window.location.reload();
        }}
      >
        Delete
      </Button>
    </Card>
  );
};

export default PublishingHouseCardItem;
