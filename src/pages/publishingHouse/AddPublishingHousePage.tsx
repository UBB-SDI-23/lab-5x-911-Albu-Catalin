import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import PublishingHouseForm from '../../components/publishingHouse/PublishingHouseForm';
import { useNavigate } from 'react-router-dom';

export const AddPublishingHousePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<any>('');
  const [website, setWebsite] = useState<any>('');
  const [phone, setPhone] = useState<any>('');
  const [yearOfEstablishment, setYearOfEstablishment] = useState<any>(0);
  const [email, setEmail] = useState<any>('');
  const [country, setCountry] = useState<any>('');
  const [county, setCounty] = useState<any>('');
  const [city, setCity] = useState<any>('');
  const [street, setStreet] = useState<any>('');
  const [zip, setZip] = useState<any>('');

  const handleSubmit = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}publishingHouses/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          yearOfEstablishment,
          website,
          phoneNumber: phone,
          email,
          address: {
            country,
            county,
            city,
            street,
            zipCode: zip,
          },
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    navigate('/publishingHouses');
  };

  return (
    <div>
      <Navbar />
      <PublishingHouseForm
        name={name}
        website={website}
        phone={phone}
        email={email}
        country={country}
        county={county}
        city={city}
        street={street}
        zip={zip}
        yearOfEstablishment={yearOfEstablishment}
        setName={setName}
        setWebsite={setWebsite}
        setPhone={setPhone}
        setEmail={setEmail}
        setCounty={setCounty}
        setCountry={setCountry}
        setCity={setCity}
        setStreet={setStreet}
        setZip={setZip}
        handleSubmit={handleSubmit}
        setYearOfEstablishment={setYearOfEstablishment}
      />
    </div>
  );
};
