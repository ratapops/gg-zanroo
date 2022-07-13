import Head from "next/head";
import { nanoid } from "nanoid";
import { useEffect, useState, Fragment } from "react";
import ReadOnlyRow from "../components/readOnlyRow";
import EditableRow from "../components/editableRow";
import AddUserForm from "../components/addUserForm";

/* eslint-disable */

const tHead = ["Name", "Age", "Nickname", "Action"];

export default function Home() {
  const [clName, setAddUserClass] = useState("hidden");
  const [users, setUsers] = useState([]);
  const [addFormData, setAddFormData] = useState({
    id: "",
    name: "",
    age: "",
    nickname: "",
  });
  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    age: "",
    nickname: "",
  });

  const [editUserId, setEditUserId] = useState(null);


  useEffect(() => {
    const localData: any = handleLocalData('load')
    if (localData) {
      setUsers(JSON.parse(localData))
    }
  }, []);

  const handleLocalData = (action: string, data?: any) => {
    const localName = "userTableVal";
    if (action == "set") {
      localStorage.setItem(localName, JSON.stringify(data));
      return true
    } else if (action = "load") {
      return localStorage.getItem(localName)
    }
  };

  const resetAddForm = () => {
    const addForm: any = document.getElementById("AddUsers");
    addForm.reset();
  };

  const addUserBtn = () => {
    resetAddForm();
    if (clName.includes("hidden")) {
      setAddUserClass("block border p-10 m-2");
    } else {
      setAddUserClass("hidden");
    }
  };

  const cancleAddUserBtn = (e: any) => {
    e.preventDefault();
    resetAddForm();
    setAddUserClass("hidden");
  };

  const handleAddFormChange = (e: any) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData: any = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (e: any) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData: any = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (e: any) => {
    e.preventDefault();

    if (addFormData.name && addFormData.age && addFormData.nickname) {
      const newUser = {
        id: nanoid(),
        name: addFormData.name,
        age: addFormData.age,
        nickname: addFormData.nickname,
      };

      const newUsers: any = [...users, newUser];

      setUsers(newUsers);
      handleLocalData('set', newUsers)
    }
    resetAddForm();
  };

  const handleEditFormSubmit = (e: any) => {
    e.preventDefault();

    const editedUser = {
      id: editUserId,
      name: editFormData.name,
      age: editFormData.age,
      nickname: editFormData.nickname,
    };

    const newUsers: any = [...users];

    const index = users.findIndex((user: any) => user.id === editUserId);

    newUsers[index] = editedUser;

    setUsers(newUsers);
    handleLocalData('set', newUsers)
    setEditUserId(null);
  };

  const handleEditClick = (e: any, user: any) => {
    e.preventDefault();
    setEditUserId(user.id);

    const formVal = {
      id: user.id,
      name: user.name,
      age: user.age,
      nickname: user.nickname,
    };

    setEditFormData(formVal);
  };

  const handleCancelClick = () => {
    setEditUserId(null);
  };

  const handleDeleteClick = (userId: any) => {
    const newUsers = [...users];
    const index = users.findIndex((user: any) => user.id === userId);
    newUsers.splice(index, 1);

    setUsers(newUsers);
    handleLocalData('set', newUsers)
  };

  return (
    <div className="p-4">
      <Head>
        <title>GG - Zanroo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold mb-4">Users</h1>

      <button
        onClick={addUserBtn}
        className="flex-1 bg-green-400 rounded-full px-8 py-2"
      >
        Add
      </button>

      <div className={clName}>
        <form id="AddUsers" onSubmit={handleAddFormSubmit}>
          <AddUserForm
            handleAddFormChange={handleAddFormChange}
            cancleAddUserBtn={cancleAddUserBtn}
          />
        </form>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <form onSubmit={handleEditFormSubmit}>
                <table className="min-w-full">
                  <thead className="border-b bg-gray-800 text-white">
                    <tr>
                      {tHead.map((ele) => (
                        <th key={ele} className="px-6 py-4 text-left">
                          {ele}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="border">
                    {users.map((user: any) => (
                      <Fragment>
                        {editUserId === user.id ? (
                          <EditableRow
                            editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                            handleCancelClick={handleCancelClick}
                          />
                        ) : (
                          <ReadOnlyRow
                            user={user}
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}
                          />
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
