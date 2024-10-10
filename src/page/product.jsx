import React, { useState } from "react";
import Table from "../Components/Table";
import useReadData from "../api/Read";
import Form from "../Components/Form";
import productForm from "../assets/Form-Fields/productForm";
import Delete from "../api/delete";
import productTable from "../assets/Table-Head/productTable";
import Modal from "../Components/Modal";
const Product = () => {
  const [isopen, setisopen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [api_info, setApi_info] = useState({});
  const [selectedUser, setselectedUser] = useState(null)
  const [updateData,setUpdateData]=useState(null);
  // Assuming useReadData returns an object with data and possibly an error state
  const { data } = useReadData(
    "http://localhost:3002/api/product"
  );

  // Function to open the form
  const handleAddUser = () => {
    setisopen(true);
    setTitle("Create product");
    setApi_info({
      type: "add",
      url: "http://localhost:3002/api/product",
    });
  };
  // Function to close the form
  const handleCloseForm = () => {
    setisopen(false);
  };
  const handleEdit = (val) => {
    setTitle("update product");
    setUpdateData(data[val])
    setApi_info({
      type: "edit",
      url: `http://localhost:3002/api/product/${val.id}`,
    });
    // header
    setisopen(true);
  };
  const handleDelete = (val) => {
    setisModalOpen(true)
    setselectedUser(val.id)
  };
  const handleConfirmation=()=>
  {
     if(selectedUser)
     {
      Delete(selectedUser,`http://localhost:3002/api/product/`)
       setisModalOpen(false)
     }
  }
  const handleCancelDelete=()=>
  {
    setisModalOpen(false)
    setselectedUser(null)
  }
  return (
    <div>
      <Table
        tableHeaders={productTable}
        title={"product"}
        onAdd={handleAddUser}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Form
        title={title}
        formFields={productForm}
        isOpenProp={isopen}
        isclose={handleCloseForm}
        api_info={api_info}
        data={updateData}
      />
      <Modal 
      isopen={isModalOpen} 
      onclose={handleCancelDelete}
      onConfirm={handleConfirmation}
      />
    </div>
  );
}; 
export default Product;
