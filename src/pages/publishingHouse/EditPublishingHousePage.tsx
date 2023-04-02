import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import PublishingHouseForm from '../../components/publishingHouse/PublishingHouseForm';
import { useNavigate, useParams } from 'react-router-dom';

const EditPublishingHousePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState<any>('');
  const [website, setWebsite] = useState<any>('');
  const [phone, setPhone] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [country, setCountry] = useState<any>('');
  const [county, setCounty] = useState<any>('');
  const [city, setCity] = useState<any>('');
  const [street, setStreet] = useState<any>('');
  const [zip, setZip] = useState<any>('');
  const [publishingHouse, setPublishingHouse] = useState<any>();
  const [yearOfEstablishment, setYearOfEstablishment] = useState<any>(0);

  const handleSubmit = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}publishingHouses/`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: publishingHouse._id,
          name,
          yearOfEstablishment,
          website,
          phoneNumber: phone,
          email,
          address: {
            _id: publishingHouse.address._id,
            country,
            county,
            city,
            street,
            zipCode: zip,
          },
        }),
      }
    );
    navigate('/publishingHouses');
  };

  useEffect(() => {
    if (id) {
      (async () => {
        const res = await fetch(
          import.meta.env.VITE_API_URL + 'publishingHouses/' + id
        );
        const data = await res.json();
        console.log(data);
        setPublishingHouse(data);
        setName(data.name);
        setWebsite(data.website);
        setPhone(data.phone);
        setEmail(data.email);
        setCountry(data.address.country);
        setYearOfEstablishment(data.yearOfEstablishment);
        setCounty(data.address.county);
        setCity(data.address.city);
        setStreet(data.address.street);
        setZip(data.address.zipCode);
      })();
    }
  }, [id]);

  return (
    <div>
      <Navbar />
      {publishingHouse && (
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
          yearOfEstablishment={yearOfEstablishment}
        />
      )}
    </div>
  );
};

export default EditPublishingHousePage;
