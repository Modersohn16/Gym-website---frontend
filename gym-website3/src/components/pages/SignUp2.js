
import React, {useState, useEffect} from 'react';



 function SignUp2() {
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
   
   
    if(Gyms != null){
        return (
            <div>{Gyms.map(Gym => <p>{Gym.name}</p>)}</div>
            );
    }

    return <p></p>;

}
export default SignUp2;