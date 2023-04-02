import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import BookCard from '../../components/book/BookCard';
import { Button } from '@mui/material';

const InfoRow = ({ desc, children }: any) => {
  return (
    <div>
      <span>{desc}:</span>
      {children}
    </div>
  );
};

const PublishingHouseDetailsPage = () => {
  const { id } = useParams();
  const [publishingHouse, setPublishingHouse] = useState<any>();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      (async () => {
        const res = await fetch(
          import.meta.env.VITE_API_URL + 'publishingHouses/' + id
        );
        const data = await res.json();
        setPublishingHouse(data);
      })();
    }
  }, [id]);
  return (
    <div>
      <Navbar />
      <Button
        onClick={() => navigate('/publishingHouses/' + id + '/edit')}
        style={{ margin: 32 }}
        variant="contained"
      >
        Edit
      </Button>
      {publishingHouse && (
        <>
          <h1>{publishingHouse.name}</h1>
          <InfoRow desc="Email">
            <a href={`mailto: ${publishingHouse.email}`}>
              {publishingHouse.email}
            </a>
          </InfoRow>
          <InfoRow desc="Phone">
            <a href={`tel: ${publishingHouse.phoneNumber}`}>
              {publishingHouse.phoneNumber}
            </a>
          </InfoRow>
          <InfoRow desc="Website">
            <a href={`${publishingHouse.website}`}>{publishingHouse.website}</a>
          </InfoRow>
          <InfoRow desc="Country">
            <span>{publishingHouse.address.country}</span>
          </InfoRow>
          <InfoRow desc="County">
            <span>{publishingHouse.address.county}</span>
          </InfoRow>
          <InfoRow desc="City">
            <span>{publishingHouse.address.city}</span>
          </InfoRow>
          <InfoRow desc="Street">
            <span>{publishingHouse.address.street}</span>
          </InfoRow>
          <InfoRow desc="ZipCode">
            <span>{publishingHouse.address.zipCode}</span>
          </InfoRow>
          <div>
            {publishingHouse.books.map((b: any) => (
              <BookCard key={b._id} title={b.title} authors={b.authors} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PublishingHouseDetailsPage;
