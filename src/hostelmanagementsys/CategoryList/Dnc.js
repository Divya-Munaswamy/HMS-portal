import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import Base from '../../Component/Base';
import { loadAllCategories } from '../../Services/Category-Caste';

const Dnc = () => {
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
      <h5 className='p-4'>List of Denotified Communities</h5>
    <div className='ml-10 mr-10'>
    <Table bordered>
        <thead className='text-center'>
          <tr> <th>SI. NO.</th> <th>Name of Caste</th> </tr>
        </thead>
        <thead>
        
        <tr className='text-center'><td>1</td><td>Attur Kilnad Koravars ( Salem,Namakkal, Cuddalore, Villupuram, Ramanathapuram, Sivaganga and Virudhunagar Districts )</td></tr>
        <tr className='text-center'><td>2</td><td>Attur Melnad Koravars ( Salem and Namakkal District )</td></tr>
        <tr className='text-center'><td>3</td><td>Appanad Kondayam kottai Maravar ( Sivaganga, Virudhunagar, Ramanathapuram, Madurai,Theni and Dindigul Districts )</td></tr>
        <tr className='text-center'><td>4</td><td>Ambalakarar ( Thanjavur, Nagapattinam, Tiruvarur, Tiruchirapalli, Karur, Perambalur and Pudukottai Districts )</td></tr>
        <tr className='text-center'><td>5</td><td>Ambalakkarar ( Suriyanur, Tiruchirapalli District)</td></tr>
        <tr className='text-center'><td>6</td><td>Boyas ( Tiruchirapalli, Karur, Perambalur, Pudukottai, The Nilgiris, Salem  Namakkal and Dharmapuri Districts)</td></tr>
        <tr className='text-center'><td>7</td><td>Battu Turkas</td></tr>
        <tr className='text-center'><td>8</td><td>C.K. Koravars ( Cuddalore and Villupuram Districts )</td></tr>
        <tr className='text-center'><td>9</td><td>Chakkala ( Sivaganga, Virudhunagar, Ramanathapuram, Thanjavur, Nagapattinam,Tiruvarur, Pudukottai Tiruchirapalli, Karur, Perambalur, Madurai , Theni, Dindigul and the Nilgiris Districts )</td></tr>
        </thead>
        <tbody className='text-center'>
          {caste.map((category, index) => (
            <tr key={category.categoryId}>
              <td>{index + 1}</td>
              <td>{category.dnc}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </Base>
  );
};

export default Dnc;
