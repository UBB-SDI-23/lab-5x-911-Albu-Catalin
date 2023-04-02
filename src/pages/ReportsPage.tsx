import { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ReportsPage = () => {
  const [authors, setAuthors] = useState<any>();
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}reports/booksPerAuthor/`
      );
      const data = await res.json();
      setAuthors(data);
      console.log(data);
    })();
  }, []);
  return (
    <div>
      <Navbar />
      <TableContainer component={Paper} style={{ marginTop: 32, padding: 32 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ background: '#86bcff' }}>
            <TableRow>
              <TableCell>Author name</TableCell>
              <TableCell>Country</TableCell>
              <TableCell align="right">Average rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors &&
              authors.map((a: any) => (
                <TableRow
                  key={a._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {a.name}
                  </TableCell>
                  <TableCell>{a.country}</TableCell>
                  <TableCell align="right">{a.averageRating}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ReportsPage;
