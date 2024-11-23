import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { loadAllKancheepuram } from '../../../Services/Category-Caste';
import KancheepuramTable from './KancheepuramTable';

const BcKancheepuram = () => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    loadAllKancheepuram()
      .then((data) => {
        setEntities(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
        <KancheepuramTable/>
    <div className='ml-20 mr-20'>
      <Table bordered >
     <thead className='text-center'>
     <tr><th>SI. NO.</th> <th>BACKWARD CLASSES HOSTELS</th> <th>VACANCIES</th></tr>
     <tr><th>1</th><th>College Boys Hostel, Kancheepuram</th></tr>
     <tr><th>2</th><th>Engineering College Boys hostel, Kancheepuram</th></tr>
     <tr><th>3</th><th>College Girls Hostel, Kancheepuram</th></tr>
     <tr><th>4</th><th>School Boys Hostel, Kancheepuram</th></tr>
     <tr><th>5</th><th>School Boys Hostel, Uthiramerur</th></tr>
     <tr><th>6</th><th>School Girls Hostel, Kancheepuram</th></tr>
     <tr><th>7</th><th>School Girls Hostel, Kunratthur</th></tr>
     </thead>
     
     <tbody>
    {entities.map((kancheepuram, index) => (
            <tr key={kancheepuram.id}>
              <td>{index + 1}</td>
              <td>{kancheepuram.bc}</td>
              <td>{kancheepuram.bcVacancy}</td>
            </tr> ))}
    </tbody>
      </Table>
    </div>
    </div>
  )
}

export default BcKancheepuram 