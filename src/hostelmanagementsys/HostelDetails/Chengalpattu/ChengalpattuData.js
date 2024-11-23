// App.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Base from '../../../Component/Base';

const ChengalpattuTable = () => {
  return (
   <Base>
   <div className='p-4 text-center'>
    <h4 className='pb-4'>CHENGALPATTU DISTRICT</h4>
  <Link to={'/chengalpattubc'}><Button color="danger" className='m-2'> Backward Classes Hostels </Button></Link>

  <Link to={'/chengalpattumbc'}><Button color="success" className='m-2'>  Most Backward Classes  </Button></Link>

  <Link to={'/chengalpattudnc'}><Button color="info" className='m-2'> Denotified Communities Hostels</Button></Link>

  <Link to={'/chengalpattumin'}><Button color="warning" className='m-2'> Minorities</Button></Link>

  
</div>
   </Base>
  );
};

export default ChengalpattuTable;
