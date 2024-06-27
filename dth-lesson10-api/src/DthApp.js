import './App.css';
import DThListUsers from './component/DThListUsers';
import axios from './api/DthApp'
import { useEffect, useState } from 'react';
function DthApp() {

  const [dthListUsers, setDthListUsers] = useState([])

  const dthGetApi = async ()=> {
    const dthReponse = await axios.get("dtUsers")
    console.log("Api data : ", dthReponse.data)
    setDthListUsers(dthReponse.data);
  }

  useEffect(()=>{
    dthGetApi();
    console.log("State data", dthListUsers);
  })


  return (
    <div className="container border my-3">
      <h1>Làm việc với api</h1>
      <hr />
      <DThListUsers renderDthListUsers = {dthListUsers} />

    </div>
  );
}

export default DthApp;
