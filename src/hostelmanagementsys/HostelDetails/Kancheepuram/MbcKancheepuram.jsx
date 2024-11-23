import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { loadAllKancheepuram } from '../../../Services/Category-Caste';
import KancheepuramTable from './KancheepuramTable';

const MbcKancheepuram = () => {
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
     <tr><th>SI. NO.</th> <th>MOST BACKWARD CLASSES HOSTELS</th> <th>VACANCIES</th></tr>
     <tr><th>1</th><th>Polytechnic College Boys Hostel, Karappettai</th></tr>
     <tr><th>2</th><th>School Boys Hostel, Maduramangalam</th></tr>
     <tr><th>3</th><th>School Boys Hostel, Salavakkam</th></tr>
     <tr><th>4</th><th>School Boys Hostel, Somangalam</th></tr>
     <tr><th>5</th><th>School Boys Hostel, Walajabad</th></tr>
     <tr><th>6</th><th>School Boys Hostel, Manampathi</th></tr>
     <tr><th>7</th><th>School Boys Hostel, Sriperumbudur</th></tr>
     <tr><th>8</th><th>School Girls Hostel, Walajabad</th></tr>
     <tr><th>9</th><th>School Girls Hostel, Uthiramerur</th></tr>

     </thead>
     <tbody>
    {entities.map((key, index) => (
            <tr key={key.id}>
              <td>{index + 1}</td>
              <td>{key.mbc}</td>
              <td>{key.mbcVacancy}</td>
            </tr> ))}
    </tbody>
      </Table>
    </div>
    </div>
  )
}

export default MbcKancheepuram 