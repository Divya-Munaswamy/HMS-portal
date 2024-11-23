import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import Base from '../../Component/Base';
import { loadAllCategories } from '../../Services/Category-Caste';

const Bcm = () => {
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
      <h5 className='p-4'>List of Backward Classe Muslims</h5>
    <div className='ml-10 mr-10'>
    <Table bordered>
        <thead className='text-center'>
          <tr> <th>SI. NO.</th> <th>Name of Caste</th> </tr>
        </thead>
        <thead>
        <tr className='text-center'><td>1</td><td>Ansar</td></tr>
        <tr className='text-center'><td>2</td><td>Dekkani Muslims</td></tr>
        <tr className='text-center'><td>3</td><td>Dudekula</td></tr>
        <tr className='text-center'><td>4</td><td>Labbisincluding Rowthar and Markayar(whether their spoken language is tamil or urdu</td></tr>
        <tr className='text-center'><td>5</td><td>Mapilla</td></tr>
        <tr className='text-center'><td>6</td><td>Sheik</td></tr>
        <tr className='text-center'><td>7</td><td>Syed</td></tr>
        </thead>
        <tbody className='text-center'>
          {caste.map((category, index) => (
            <tr key={category.categoryId}>
              <td>{index + 1}</td>
              <td>{category.bcm}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </Base>
  );
};

export default Bcm;
