import React, { useState } from "react";
import Table from "../Components/Table";
import useReadData from "../api/Read";
import Form from "../Components/Form";
import UserForm from "../assets/Form-Fields/UserForm";
import Delete from "../api/delete";
import userTable from "../assets/Table-Head/userTable";
import Modal from "../Components/Modal";

const User = () => {
  const [isopen, setisopen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [api_info, setApi_info] = useState({});
  const [selectedUser, setselectedUser] = useState(null);
  const [feedback, setFeedback] = useState(""); // State for feedback messages
  
  // Fetch user data
  const { data, error } = useReadData("http://localhost:3002/api/user/");

  // Function to open the form
  const handleAddUser = () => {
    setisopen(true);
    setTitle("Create User");
    setApi_info({
      type: "add",
      url: "http://localhost:3002/api/user/signup",
    });
  };

  // Function to close the form
  const handleCloseForm = () => {
    setisopen(false);
  };

  const handleEdit = (val) => {
    setTitle("Update User");
    setApi_info({
      type: "edit",
      url: `http://localhost:3002/api/user/${val.id}`,
    });
    setisopen(true);
  };

  const handleDelete = (val) => {
    setisModalOpen(true);
    setselectedUser(val.id);
  };

  const handleConfirmation = async () => {
    if (selectedUser) {
      try {
        await Delete(selectedUser, `http://localhost:3002/api/user/`);
      } catch (err) {
        setFeedback("Error deleting user. Please try again."); // Set error message
      } finally {
        setisModalOpen(false);
        setselectedUser(null);
      }
    }
  };

  const handleCancelDelete = () => {
    setisModalOpen(false);
    setselectedUser(null);
  };

  return (
    <div>
      <Table
        tableHeaders={userTable}
        title={"User"}
        onAdd={handleAddUser}
        data={data.users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Render Form only when isopen is true */}
      {isopen && (
        <Form
          title={title}
          formFields={UserForm}
          isOpenProp={isopen}
          isclose={handleCloseForm}
          api_info={api_info}
          option={true}
        />
      )}

      {/* Render Modal only when isModalOpen is true */}
      {isModalOpen && (
        <Modal 
          isopen={isModalOpen}
          onclose={handleCancelDelete}
          onConfirm={handleConfirmation}
        />
      )}

      {/* Display feedback message */}
      {feedback && <p style={{ color: feedback.includes("Error") ? "red" : "green" }}>{feedback}</p>}
      
      {error && <p style={{ color: 'red' }}>Error loading user data</p>}
    </div>
  );
};

export default User;
