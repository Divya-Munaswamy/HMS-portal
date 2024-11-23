import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { loadAllChennai } from '../../../Services/Category-Caste';
import ChennaiTable from './ChennaiData';

const BcChennai = () => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    loadAllChennai()
      .then((data) => {
        setEntities(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
        <ChennaiTable/>
    <div className='ml-20 mr-20'>
      <Table bordered >
     <thead className='text-center'>
     <tr><th>SI. NO.</th> <th>BACKWARD CLASSES HOSTELS</th> <th>VACANCIES</th></tr>
     <tr><th>1</th><th>College Boys Hostel, Saidapet (Old) Now@ Tondiarpet,     Chenni-81</th></tr>
     <tr><th>2</th><th>College Boys Hostel,  Saidapet (New) Now@  Tondiarpet, Chenni-81</th></tr>
     <tr><th>3</th><th>College Boys Hostel, Thirunagar(Old),   Vadapalani, Chennai-26</th></tr>
     <tr><th>4</th><th>College Boys Hostel, Thirunagar (New),  Now@  Kolathur, Chennai-99</th></tr>
     <tr><th>5</th><th>College Boys Hostel, Otteri(New)   Now@   Kolathur, Chennai-99</th></tr>
     <tr><th>6</th><th>College Boys Hostel, Kailasapuram, Mylapore(Old), Chennai-04  Now@   Kolathur, Chennai-99</th></tr>
     <tr><th>7</th><th>Engineering College Boys Hostel, Anna University Campus, Guindy, Chennai-25</th></tr>
     <tr><th>8</th><th>College Boys Hostel, Madhavaram, Chennai-60  Now@ Tondiarpet, Chennai-81</th></tr>
     <tr><th>9</th><th>College Girls Hostel – I, Lady Wellington Campus, Triplicane, Chennai-05.</th></tr>
     <tr><th>10</th><th>College Girls Hostel - II, Lady Wellington Campus, Triplicane, Chennai-05.</th></tr>
     <tr><th>11</th><th>College Girls Hostel, Queenmary’s College Campus, Chennai-05</th></tr>

     </thead>
     <tbody>
    {entities.map((chennai, index) => (
            <tr key={chennai.id}>
              <td>{index + 1}</td>
              <td>{chennai.bc}</td>
              <td>{chennai.bcVacancy}</td>
            </tr> ))}
    </tbody>
      </Table>
    </div>
    </div>
  )
}

export default BcChennai