import { Table } from 'reactstrap';
import ChengalpattuTable from './ChengalpattuData';
import React, { useEffect, useState } from react;

const Chengalpattu = () => {
    const [entities,setEntities] = useState([]);
    useEffect(() => {
        loadAllChengalpattu()
        .then((data) =>{
            setEntities(data);
        })
        .catch((error) =>{
            console.log(error);
        });
},[]);
return ( 
    <div>
        <ChengalpattuTable/>
    <div className='ml-20 mr-20'>
        <Table bordered>
            <thead className='text-center'>
                <tr><th>SI.NO</th> <th>BACKWARD CLASSES HOSTELS</th> <th>VACANCIES</th></tr>
            </thead>
            <tbody>
                {entities.map((chengalpattu,index) => (
                    <tr key={chengalpattu.id}>
                        <td>{index +1}</td>
                        <td>{chengalpattu.bc}</td>
                        <td>{chengalpattu.bcVacancy}</td>
                    </tr>   ))}
            </tbody>
        </Table>
    </div>
    </div>
)


}

export default BcChengalpattu