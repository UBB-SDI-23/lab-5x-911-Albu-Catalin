import { Button, TextField } from '@mui/material';
import styles from './PublishingHouseForm.module.css';

const PublishingHouseForm = ({
  name,
  website,
  phone,
  email,
  country,
  county,
  city,
  street,
  zip,
  setName,
  setWebsite,
  setPhone,
  setEmail,
  setCounty,
  setCountry,
  setCity,
  setStreet,
  setZip,
  handleSubmit,
  setYearOfEstablishment,
  yearOfEstablishment,
}: any) => {
  return (
    <form className={styles['form']}>
      <TextField
        style={{ marginBottom: 16 }}
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        style={{ marginBottom: 16 }}
        label="Year of establishment"
        value={yearOfEstablishment}
        onChange={(e) => setYearOfEstablishment(e.target.value)}
      />
      <TextField
        style={{ marginBottom: 16 }}
        label="Webiste"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <TextField
        style={{ marginBottom: 16 }}
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        style={{ marginBottom: 16 }}
        label="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        style={{ marginBottom: 16 }}
        label="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <TextField
        style={{ marginBottom: 16 }}
        label="County"
        value={county}
        onChange={(e) => setCounty(e.target.value)}
      />
      <TextField
        style={{ marginBottom: 16 }}
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <TextField
        style={{ marginBottom: 16 }}
        label="Street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <TextField
        style={{ marginBottom: 16 }}
        label="Zip code"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      />
      <Button
        style={{ width: 'fit-content' }}
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
};

export default PublishingHouseForm;
