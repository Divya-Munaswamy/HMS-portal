import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import Base from '../../Component/Base';
import { loadAllCategories } from '../../Services/Category-Caste';

const Bc = () => {
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
      <h5 className='p-4'>List of Backward Classes</h5>
    <div className='ml-10 mr-10'>
    <Table bordered>
        <thead className='text-center'>
          <tr> <th>SI. NO.</th> <th>Name of Caste</th> </tr>
        </thead>
        <thead>
        <tr className='text-center'><td>1</td>
        <td>Agamudayar including Thozhu or Thuluva Vellala</td></tr>
        <tr className='text-center'><td>2</td><td>Agaram Vellan Chettiar</td></tr>
        <tr className='text-center'><td>3</td><td>Alwar, Azhavar and Alavar (in Kanniyakumari District and Shencottah Taluk of Tirunelveli District.)</td></tr>
        <tr className='text-center'><td>4</td><td>Servai(except Tiruchirapalli, Karur, Perambalur and Pudukottai Districts.)</td></tr>
        <tr className='text-center'><td>5</td><td>Ansar</td></tr>
        <tr className='text-center'><td>6</td><td> Arayar, Nulayar(in Kanniyakumari District and Shencottah Taluk of   Tirunelveli District)</td></tr>
        <tr className='text-center'><td>7</td><td>Archakarai Vellala</td></tr>
        <tr className='text-center'><td>8</td><td>Aryavathi(in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)</td></tr>
        <tr className='text-center'><td>9</td><td>Ayira Vaisyar</td></tr>
        <tr className='text-center'><td>10</td><td>Badagar</td></tr>
        <tr className='text-center'><td>11</td><td>Billava</td></tr>
        <tr className='text-center'><td>12</td><td>Bondil</td></tr>
        <tr className='text-center'><td>13</td><td>Boyas (except Tiruchirapalli, Karur, Perambalur, Pudukottai, The Nilgiris, Salem , Namakkal and Dharmapuri Districts). Pedda Boyar (except Tiruchirapalli, Karur , Perambalur and Pudukottai Districts) Oddars (except Thanjavur, Nagapattinam, Tiruvarur, Tiruchirapalli, Karur, Perambalur, Pudukottai, Madurai,Theni and Dindigul Districts) Kaloddars (except Kancheepuram, Tiruvallur, Ramanathapuram, Sivaganga, Virudhunagar, Madurai, Theni, Dindigul, Pudukottai, Tiruchirapalli, Karur  Perambalur, Tirunelveli, Thoothukudi, Salem and Namakkal Districts) Nellorepet oddars (except Vellore and Tiruvannamalai Districts) Sooramari oddars ( except Salem and Namakkal Districts)</td></tr>
        <tr className='text-center'><td>14</td><td>Chakkala (except Sivaganga, Virudhunagar, Ramanathapuram,Thanjavur Nagapattinam, Tiruvarur, Pudukottai, Tiruchirapalli, Karur, Perambalur, Madurai, Theni, Dindigul and the Nilgiris Districts) </td></tr>
        <tr className='text-center'><td>15</td><td>Chavalakarar (in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)</td></tr>
        <tr className='text-center'><td>16</td><td>Chowdry</td></tr>
        <tr className='text-center'><td>17</td><td>Converts to Christianity from Scheduled Castes irrespective of the generation of  conversion  for the purpose of reservation of seats in Educational Institutions and  for seats in Public Services </td></tr>
        <tr className='text-center'><td>18</td><td>C.S.I formerly S.I.U.C (in Kanniyakumari District and Shencottah Taluk of Tirunelveli District) </td></tr>
        <tr className='text-center'><td>19</td><td>Donga Dasaris (except Kancheepuram, Tiruvallur, Tiruchirapalli,Karur, Perambalur, Pudukottai Chennai ,Salem and Namakkal Districts)</td></tr>
        <tr className='text-center'><td>20</td><td>Dekkani Muslims</td></tr>
        <tr className='text-center'><td>21</td><td>Devangar, Sedar</td></tr>
        <tr className='text-center'><td>22</td><td>Dombs (except Pudukottai, Tiruchirapalli ,Karur and Perambalur Districts) Dommars (except Thanjavur, Nagapattinam,Tiruvarur, Pudukottai, Vellore and Thiruvannamalai Districts)</td></tr>
        <tr className='text-center'><td>23</td><td>Dudekula</td></tr>
        <tr className='text-center'><td>24</td><td>Enadi</td></tr>
        <tr className='text-center'><td>25</td><td>Ezhavathy(in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)</td></tr>
        <tr className='text-center'><td>26</td><td>Ezhuthachar (in Kanniyakumari District and Shencottah Taluk of Tirunelveli District) </td></tr>
        <tr className='text-center'><td>27</td><td>Ezhuva(in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)</td></tr>
        <tr className='text-center'><td>28</td><td>Gangavar </td></tr>
        <tr className='text-center'><td>29</td><td>Gavara, Gavarai and Vadugar(Vaduvar)(other than Kamma, Kapu,Balija and Reddi)</td></tr>
        <tr className='text-center'><td>30</td><td>Gounder </td></tr>
        <tr className='text-center'><td>31</td><td>Gowda (including Gammala, Kalali and Anuppa Gounder) </td></tr>
        <tr className='text-center'><td>32</td><td>Hegde</td></tr>
        <tr className='text-center'><td>33</td><td>Idiga</td></tr>
        <tr className='text-center'><td>34</td><td>IllathuPillaimar, Illuvar, Ezhuvar and Illathar</td></tr>
        <tr className='text-center'><td>35</td><td>Jhetty</td></tr>
        <tr className='text-center'><td>36</td><td>Jogis (Except Kancheepuram, Tiruvallur, Madurai, Theni, Dindigul Cuddalore, Villupuram, Vellore and Tiruvannamalai Districts)</td></tr>
        <tr className='text-center'><td>37</td><td>Kabbera</td></tr>
        <tr className='text-center'><td>38</td><td>Kaikolar, Sengunthar</td></tr>
        <tr className='text-center'><td>39</td><td>Kaladi (except Sivaganga, Virudhunagar, Ramanatha puram, Madurai,Theni,Dindigul,Thanjavur, Nagapattinam,Tiruvarur, Pudukottai,  Tiruchirapalli, Karur and Perambalur Districts)</td></tr>
        <tr className='text-center'><td>40</td><td>Kalari Kurup including Kalari Panicker (in Kanniyakumari District and Shenkottah Taluk of Tirunelveli District)</td></tr>
        <tr className='text-center'><td>41</td><td>Kalingi</td></tr>
        <tr className='text-center'><td>42</td><td>Kallar, Easanattu kallar, Gandharva Kottai Kallars(except Thanjavur, Nagapattinam, Tiruvarur and pudukottai Districts)   Kootappal Kallars-(except Pudukottai, Tiruchirapalli, Karur and Perambalur Districts)  Piramalai Kallars- (except Sivaganga,Virudhunagar, Ramanathapuram. Madurai. Theni, Dindigul, Pudukottai, Thanjavur, Nagapattinam and Tiruvarur Districts)Periyasooriyur Kallars- (except Tiruchirapalli, Karur, Perambalur and Pudukottai Districts) </td></tr>
        <tr className='text-center'><td>43</td><td>Kallar Kula Thondaman</td></tr>
        <tr className='text-center'><td>44</td><td>Kalveli Gounder</td></tr>
        <tr className='text-center'><td>45</td><td>Kambar</td></tr>
        <tr className='text-center'><td>46</td><td>Kammalar or Viswakarma , Viswakarmala (including Thattar, Porkollar, Kannar, Karumar, Kollar, Thacher, Kal Thacher, Kamsala and Viswa brahmin.</td></tr>
        <tr className='text-center'><td>47</td><td>Kani, Kanisu, Kaniyar Pannikar</td></tr>
        <tr className='text-center'><td>48</td><td>Kaniyala Vellalar</td></tr>
        <tr className='text-center'><td>49</td><td>Kannada Saineegar ,Kannadiyar (Throughout the State) and Dasapalanjika (Coimbatore, Erode and the Nilgiris Districts)</td></tr>
        <tr className='text-center'><td>50</td><td>Kannadiya Naidu</td></tr>
        <tr className='text-center'><td>51</td><td>Karpoora Chettiar</td></tr>
        <tr className='text-center'><td>52</td><td>Karuneegar (Seer Karuneegar, Sri Karuneegar, Sarattu Karuneegar, Kaikatti Karuneegar, Mathuvazhi Kanakkar, Sozhi Kanakkar, and Sunnambu Karuneegar)</td></tr>
        <tr className='text-center'><td>53</td><td>Kasukkara Chettiar</td></tr>
        <tr className='text-center'><td>54</td><td>Katesar, Pattamkatti</td></tr>
        <tr className='text-center'><td>55</td><td>Kavuthiyar</td></tr>
        <tr className='text-center'><td>56</td><td>Kerala Mudali</td></tr>
        <tr className='text-center'><td>57</td><td>Kharvi</td></tr>
        <tr className='text-center'><td>58</td><td>Khatri</td></tr>
        <tr className='text-center'><td>59</td><td>Kongu Vaishnava</td></tr>
        <tr className='text-center'><td>60</td><td>Kongu Vellalars( including Vellala Gounder, Nattu Gounder, Narambukkatti Gounder, Tirumudi Vellalar, Thondu Vellalar, Pala Gounder, Poosari, Gounder, Anuppa Vellala Gounder, Kurumba Gounder, Padaithalai Gounder, Chendalai Gounder, Pavalankatti Vellala Gounder, Pallavellala GounderSanku,Vellala Gounder,and Rathinagiri Gounder). </td></tr>
        <tr className='text-center'><td>61</td><td>KoppalaVelama</td></tr>
        <tr className='text-center'><td>62</td><td>Koteyar</td></tr>
        <tr className='text-center'><td>63</td><td>Krishnanvaka (in Kanniyakumari District and Shenkottah Taluk of Tirunelveli District)</td></tr>
        <tr className='text-center'><td>64</td><td>Kudikara Vellalar</td></tr>
        <tr className='text-center'><td>65</td><td>Kudumbi ( in Kanniyakumari District and Shenkottah Taluk of Tirunelveli District)</td></tr>
        <tr className='text-center'><td>66</td><td>Kuga Vellalar</td></tr>
        <tr className='text-center'><td>67</td><td>Kunchidigar</td></tr>
        <tr className='text-center'><td>68</td><td>Labbais including Rowthar and Marakayar (whether their spoken language is Tamil or Urdu)</td></tr>
        <tr className='text-center'><td>69</td><td>Lambadi</td></tr>
        <tr className='text-center'><td>70</td><td>Latin Catholics (in Kanniyakumari District andShenkottah Taluk of Tirunelveli District)</td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
        <tr className='text-center'><td></td><td></td></tr>
       </thead>



        <tbody className='text-center'>
          {caste.map((category, index) => (
            <tr key={category.categoryId}>
              <td>{index + 1}</td>
              <td>{category.categoryDescription}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </Base>
  );
};

export default Bc;
