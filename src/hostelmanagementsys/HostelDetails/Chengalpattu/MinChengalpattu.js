
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { loadAllChengalpattu } from '../../../Services/Category-Caste';
import ChengalpattuTable from './ChengalpattuData';

const MinChengalpattu=()=> {
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
        <div>
           <ChengalpattuTable/>
<div className='ml-20 mr-20'>
  <Table bordered>
    <thead className='text-center'>
    <tr> <th>SI. NO.</th> <th>MINORITIES HOSTELS</th> <th>VACANCIES</th></tr>
    </thead>
    <tbody>
    {entities.map((chengalpattu, index) => (
            <tr key={chengalpattu.id}>
              <td>{index + 1}</td>
              <td>{chengalpattu.min}</td>
              <td>{chengalpattu.minVacancy}</td>
            </tr> ))}
    </tbody>
  </Table> 
   </div> </div>
    );
}

export default MinChengalpattu;
