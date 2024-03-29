import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Button, Card } from '@mui/material';
import PublishingHouseCardItem from '../../components/publishingHouse/PublishingHouseCardItem';
import styles from './PublishingHouseListPage.module.css';
import { useNavigate } from 'react-router-dom';

const PublishingHouseListPage = () => {
  const [publishingHouses, setPublishingHouses] = useState<any[] | undefined>();
  const [filter, setFilter] = useState<any>();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const res = await fetch(
        import.meta.env.VITE_API_URL + 'publishingHouses'
      );
      const data = await res.json();
      setPublishingHouses(data);
    })();
  }, []);
  useEffect(() => {
    console.log('change');
    if (publishingHouses && filter !== undefined) {
      const data = [...publishingHouses];
      if (filter)
        data.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
      else
        data.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
      setPublishingHouses(data);
    }
  }, [filter]);
  return (
    <div>
      <Navbar />
      <Button
        variant="contained"
        style={{ marginTop: 32, marginLeft: 64 }}
        onClick={() => navigate('/publishingHouses/add')}
      >
        +Add a new publishing house
      </Button>
      <Button variant="outlined" onClick={() => setFilter(!filter)}>
        Filter
      </Button>
      <ul className={styles.list}>
        {publishingHouses &&
          publishingHouses.map((p) => (
            <PublishingHouseCardItem
              name={p.name}
              website={p.website}
              phoneNumber={p.phoneNumber}
              key={p._id}
              id={p._id}
            />
          ))}
      </ul>
    </div>
  );
};

export default PublishingHouseListPage;
