import './App.css';
import DThListUsers from './component/DThListUsers';
import DthFormAddofEdit from './component/DthFormAddofEdit';
import axios from './api/DthApp';
import { useEffect, useState } from 'react';

function DthApp() {
  const [dthListUsers, setDthListUsers] = useState([]);

  const dthGetApi = async () => {
    const dthResponse = await axios.get("dtUsers");
    console.log("Api data : ", dthResponse.data);
    setDthListUsers(dthResponse.data);
  };

  useEffect(() => {
    dthGetApi();
    console.log("State data", dthListUsers);
  }, []); // Thêm mảng rỗng để useEffect chỉ chạy một lần

  const [dthAddOrEdit, setDthAddOrEdit] = useState(false);
  const dthInitUser = {
    UserName: "Đỗ Trọng Huy",
    Password: "20/10/2004",
    Email: "hel0babyno1234@gmail.com",
    Phone: "0123465789",
    id: "2210900029",
  };
  const [dthUser, setDthUser] = useState(dthInitUser);

  // Hàm xử lý nút thêm mới
  const dthHandleAddNew = () => {
    setDthAddOrEdit(true);
  };

  const dthHandleClose = (param) => {
    setDthAddOrEdit(param);
  };

  const dthHandleSubmit = (param) => {
    dthGetApi(); // Sửa tên hàm gọi API
    setDthAddOrEdit(param);
  };

  const dthHandleDelete = () => {
    dthGetApi(); // Sửa tên hàm gọi API
  };

  let dthElementForm = dthAddOrEdit === true ? (
    <DthFormAddofEdit
      renderUsers={dthUser}
      onDthClose={dthHandleClose}
      onDthSubmitForm={dthHandleSubmit}
    />
  ) : (
    ""
  );

  return (
    <div className="container border my-3">
      <h1>Làm việc với API</h1>
      <hr />
      <DThListUsers renderDthListUsers={dthListUsers} onDthDelete={dthHandleDelete} />
      <button className="btn btn-primary" name="btnDvcThemMoi" onClick={dthHandleAddNew}>
        Thêm mới
      </button>
      {dthElementForm}
    </div>
  );
}

export default DthApp;
