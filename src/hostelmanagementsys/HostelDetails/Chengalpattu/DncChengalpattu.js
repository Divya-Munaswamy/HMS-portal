import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { loadAllChengalpattu } from '../../../Services/Category-Caste';
import ChengalpattuTable from './ChennaiData';

const DncChengalpattu = () => {

  const [entities, setEntities] = useState([]);
  useEffect(() => {
    loadAllChengalpattu()
      .then((data) => {
        setEntities(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
   <>
   <ChengalpattuTable/>
    <div className='ml-20 mr-20'>
      <Table bordered>
        <thead className='text-center uppercase'>
          <tr> <th>SI. NO.</th> <th>Denotified Communities Hostels</th> <th>VACANCIES</th></tr>
        </thead>
        <tbody>
    {entities.map((chengalpattu, index) => (
            <tr key={chengalpattu.id}>
              <td>{index + 1}</td>
              <td>{chengalpattu.dnc}</td>
              <td>{chengalpattu.dncVacancy}</td>
            </tr> ))}
    </tbody>

      </Table>
    </div>
   </>
  )
}

export default DncChengalpattu