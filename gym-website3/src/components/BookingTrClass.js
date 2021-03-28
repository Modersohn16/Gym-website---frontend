import React, { useState } from "react";
import "BookingTrClass.css";

const Booking = () => 
<>
function GymList() {
   const [Gyms, setGyms] = useState(null);
   const GetGymUrl = "https://localhost:44364/api/User/GetGym";
   const Init = {
       method: "GET",
       headers: {"Content-type": "application/json;charset=UTF-8",
       'Accept': 'application/json',
       "Access-Control-Allow-Origin": "*"}  
   };
    useEffect(() => {
       fetch(GetGymUrl, Init).then(response => response.json())
       .then(data => setGyms(data));
   }, [GetGymUrl]) 
  
  
if(Gyms != null)
{
       return (
           <>
           <div><h1>OUR GYMS</h1></div>
           <div title="summary">
    <table className="Table" width="100%" border="1">
    <tbody>
    <tr>
      <td>NAME</td>
      <td>ADDRESS</td>
      <td>MAX PEOPLE</td>
      <td>OPERATIONAL HOURS</td>
      <td>EMAIL</td>
      <td>PHONE NUMBER</td>
    </tr>
{ 
Gyms.map(gym => 
            <tr>
            <td><span>{gym.name}</span></td>
            <td><span>{gym.streetAdress}<br/></span>
            <span>{gym.postalCode}<br/></span>
            <span>{gym.city}</span></td>
            <td><span>{gym.maxPeople}</span></td>
            <td><span>{gym.operationalHours}</span></td>
            <td><span>{gym.email}</span></td>
            <td><span>{gym.phoneNumber}</span></td>
            </tr>)
} 


        
    
    </tbody>
    </table>
    </div>
           </>
           );
   }

   return <p></p>;

}
</div>
</>

export default BookingTrClass;