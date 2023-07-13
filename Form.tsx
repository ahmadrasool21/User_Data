import React from "react";
import { useState } from "react";
import { MouseEvent } from "react";
// import New from "./new";

function UserForm() {
  const [UserName, setUserName] = useState(""); /// to track name input
  const [UserContact, setUserContact] = useState(""); /// to track usercontact input
  const [listState, setlistState] = useState([]); // to track tasks in list

  const [EditState, setEditState] = useState([]);
  const [newObj, setNewObj] = useState(false);

  function handleClick(e: MouseEvent) {
    const UserObj = {
      id: listState.length + UserContact,
      user: UserName,
      ContactNo: UserContact,
    }; // creating user obj
    setlistState([...listState, UserObj]); // putting objects in the list
    e.preventDefault();
    // console.log(listState);
  }

  function handledelete(id) {
    setlistState(listState.filter((User) => User.id !== id)); //  removing the user
    // console.log(listState);
  }

  function handleEdit(id) {
    const EditableUser = listState.filter((User) => User.id === id);
    console.log(EditableUser);
    // setUserName=EditableUser[0].user
    // setEditState(...EditState, EditableUser); /// same logic while creating user for first time

    // console.log(listState);
    // newlistState = listState.filter((listTask) => listTask.id == id);
    // setlistState([...listState, newlistState]);
  }

  //   function saveTask(Contact,username) {
  //     EditableTask = listState.filter((User) => User.ContactNo == id);
  //     EditableTask[0].user = username;
  //     EditableTask[0].ContactNo = contact;
  //     setEditState(false);
  //   }

  return (
    <>
      {/* //////////////////////////////////*/}
      <div>
        <input // name input//
          type="text"
          name="name"
          value={UserName}
          onChange={(e) => setUserName(e.target.value)} /// updating input state of username ///
        ></input>

        <input // contact input//
          type="number"
          name="contact"
          value={UserContact}
          onChange={(e) => setUserContact(e.target.value)} /// updating input state of user contact no ///
        ></input>

        <button type="button" onClick={handleClick}>
          Add User
        </button>
      </div>
      <br />
      <div>
        {listState.map((User, index) => (
          <div key={index}>
            Name is:{User.user}
            <br />
            Contact is :{User.ContactNo}
            <br />
            <button type="button" onClick={() => handleEdit(User.ContactNo)}>
              Edit
            </button>
            <button type="button" onClick={() => handledelete(User.id)}>
              Delete
            </button>
            <br />
          </div>
        ))}
      </div>
      {/* ///////////////////////////////////*/}
      <br />
    </>
  );
}

export default UserForm;
