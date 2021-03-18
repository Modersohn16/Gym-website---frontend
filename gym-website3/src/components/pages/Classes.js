import React from 'react';
import './Classes.css';

export default function Classes() {
  return (
      <>
      <h1 className='classes'>CLASSES</h1>

<div><label for="start">Start date:</label>
<input type = "date"
id = "start"
name = "trip-start"
value = "2018-07-22"
min = "2018-01-01"
max = "2018-12-31"/></div>


<div title="summary" className="ClassesTable">
<table className="Table" width="100%" border="1">
<tbody>
<tr>
 <td>NAME</td>
 <td>GYM</td>
 <td>MAX PEOPLE</td>
 <td>DESCRIPTION</td>
 <td>TRAINER</td>
 <td>TIME</td>
</tr>
{/* 
{Gyms.map(gym => 
       <tr>
       <td><span>{gym.name}</span></td>
       <td><span>{gym.streetAdress}<br/></span>
       <span>{gym.postalCode}<br/></span>
       <span>{gym.city}</span></td>
       <td><span>{gym.maxPeople}</span></td>
       <td><span>{gym.operationalHours}</span></td>
       <td><span>{gym.email}</span></td>
       <td><span>{gym.phoneNumber}</span></td>
       </tr>)} */}


   <tr>
   <td><span>Taekwondo</span></td>
   <td><span>Gym A <br/></span>
   <span>address?? </span></td>
   <td><span>10</span></td>
   <td><span>Shall we have a description??</span></td>
   <td><span>email@gmail.com</span></td>
   <td><span>17.00 - 18.00</span></td>
   </tr>

   <tr>
   <td><span>Karate</span></td>
   <td><span>Gym B<br/></span>
   <span>address <br/></span>
   <span>Zalew</span></td>
   <td><span>10</span></td>
   <td><span>5.00 - 24.00</span></td>
   <td><span>email@gmail.com</span></td>
   <td><span>074 555 399</span></td>
   </tr>

   <tr>
   <td><span>Kendo</span></td>
   <td><span>Gym C<br/></span>
   <span>59 399 <br/></span>
   <span>Zalew</span></td>
   <td><span>10</span></td>
   <td><span>5.00 - 24.00</span></td>
   <td><span>email@gmail.com</span></td>
   <td><span>074 555 399</span></td>
   </tr>

   <tr>
   <td><span>gymex</span></td>
   <td><span>ul. Moniuszki <br/></span>
   <span>59 399 <br/></span>
   <span>Zalew</span></td>
   <td><span>10</span></td>
   <td><span>5.00 - 24.00</span></td>
   <td><span>email@gmail.com</span></td>
   <td><span>074 555 399</span></td>
   </tr>

   <tr>
   <td><span>gymex</span></td>
   <td><span>ul. Moniuszki <br/></span>
   <span>59 399 <br/></span>
   <span>Zalew</span></td>
   <td><span>10</span></td>
   <td><span>5.00 - 24.00</span></td>
   <td><span>email@gmail.com</span></td>
   <td><span>074 555 399</span></td>
   </tr>

   <tr>
   <td><span>gymex</span></td>
   <td><span>ul. Moniuszki <br/></span>
   <span>59 399 <br/></span>
   <span>Zalew</span></td>
   <td><span>10</span></td>
   <td><span>5.00 - 24.00</span></td>
   <td><span>email@gmail.com</span></td>
   <td><span>074 555 399</span></td>
   </tr>

   <tr>
   <td><span>gymex</span></td>
   <td><span>ul. Moniuszki <br/></span>
   <span>59 399 <br/></span>
   <span>Zalew</span></td>
   <td><span>10</span></td>
   <td><span>5.00 - 24.00</span></td>
   <td><span>email@gmail.com</span></td>
   <td><span>074 555 399</span></td>
   </tr>

</tbody>
</table>
</div>

      </>

  );
}
