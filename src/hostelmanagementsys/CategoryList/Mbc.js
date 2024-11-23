import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import Base from '../../Component/Base';
import { loadAllCategories } from '../../Services/Category-Caste';

const Mbc = () => {
  const [caste, setCaste] = useState([]);

  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        console.log(data);
        setCaste(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Base>
      <h5 className='p-4'>List of Most Backward Classes</h5>
    <div className='ml-10 mr-10'>
    <Table bordered>
        <thead className='text-center'>
          <tr> <th>SI. NO.</th> <th>Name of Caste</th> </tr>
        </thead>
        <thead>
        <tr className='text-center'><td>1</td><td>Ambalakarar</td></tr>
        <tr className='text-center'><td>2</td><td>Andipandaram</td></tr>
        <tr className='text-center'><td>3</td><td>Bestha, Siviar</td></tr>
        <tr className='text-center'><td>4</td><td>Bhatraju ( other than Kshatriya Raju )</td></tr>
        <tr className='text-center'><td>5</td><td>Boyar, Oddar</td></tr>
        <tr className='text-center'><td>6</td><td>Dasari</td></tr>
        <tr className='text-center'><td>7</td><td>Dommara</td></tr>
        <tr className='text-center'><td>8</td><td>Eravallar ( except in Kanniyakumari District and Shencottah Taluk of Tirunelveli District where the community is a Scheduled Tribe )</td></tr>
        <tr className='text-center'><td>9</td><td>Isaivellalar</td></tr>
        <tr className='text-center'><td>10</td><td>Jambuvanodai</td></tr>
        </thead>

        <tbody className='text-center'>
          {caste.map((category, index) => (
            <tr key={category.categoryId}>
              <td>{index + 1}</td>
              <td>{category.mbc}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </Base>
  );
};

export default Mbc;
