import axios from '../api/DthApp';
import React, { useEffect, useState } from 'react';

export default function DthFormAddofEdit({ onDthClose, onDthSubmitForm, renderUsers }) {
  const [dthId, setDthId] = useState(0);
  const [dthUserName, setDthUserName] = useState("");
  const [dthPassword, setDthPassword] = useState("");
  const [dthEmail, setDthEmail] = useState("");
  const [dthPhone, setDthPhone] = useState("");

  useEffect(() => {
    setDthId(renderUsers.id);
    setDthUserName(renderUsers.UserName);
    setDthPassword(renderUsers.Password);
    setDthEmail(renderUsers.Email);
    setDthPhone(renderUsers.Phone);
  }, [renderUsers]);

  const DthHandleClose = () => {
    onDthClose(false);
  };

  const DthHandleSubmit = async (event) => {
    event.preventDefault();
    console.log(dthId, dthUserName, dthPassword, dthEmail, dthPhone);

    let DthObjUser = {
      UserName: dthUserName,
      Password: dthPassword,
      Email: dthEmail,
      Phone: dthPhone,
      id: dthId,
    };

    const dthRes = await axios.post("dthUsers", DthObjUser);

    onDthSubmitForm(false);
  };

  return (
    <div className="">
      <form>
        <div className="input-group mb-3">
          <span className="input-group-text" id="id">Id</span>
          <input type="text" className="form-control"
            name="id" value={dthId} onChange={(ev) => setDthId(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="UserName">UserName</span>
          <input type="text" className="form-control"
            name="UserName" value={dthUserName} onChange={(ev) => setDthUserName(ev.target.value)}
            placeholder="UserName" aria-label="UserName" aria-describedby="UserName" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="Password">Password</span>
          <input type="password" className="form-control"
            name="Password" value={dthPassword} onChange={(ev) => setDthPassword(ev.target.value)}
            placeholder="Password" aria-label="Password" aria-describedby="Password" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="Email">Email</span>
          <input type="email" className="form-control"
            name="Email" value={dthEmail} onChange={(ev) => setDthEmail(ev.target.value)}
            placeholder="Email" aria-label="Email" aria-describedby="Email" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="Phone">Phone</span>
          <input type="number" className="form-control" name="Phone" value={dthPhone} onChange={(ev) => setDthPhone(ev.target.value)}
            placeholder="Phone" aria-label="Phone" aria-describedby="Phone" />
        </div>
        <button className="btn btn-primary" name="btnDthSave" onClick={(ev) => DthHandleSubmit(ev)}>Ghi lại</button>
        <button className="btn btn-danger" onClick={DthHandleClose}>Đóng</button>
      </form>
    </div>
  );
}
