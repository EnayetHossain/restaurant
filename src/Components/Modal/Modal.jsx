/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import "./Modal.css";

const MyModal = ({ show, handleClose, submit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!show) {
      reset();
    }
  }, [show, reset]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          className="d-flex flex-column justify-content-start"
          id="submission-form"
          onSubmit={handleSubmit(submit)}
        >
          <input
            className="border-1 outline-none py-2 px-2 my-3 border-primary"
            type="text"
            {...register("Name", { required: true })}
            placeholder="Food Name"
          />
          {errors.Name && (
            <span className="text-danger">Please provide the name</span>
          )}
          <input
            className="border-1 outline-none py-2 px-2 my-3 border-primary"
            type="number"
            step={"any"}
            {...register("price")}
            placeholder="Enter Price"
          />
          <input
            className="border-1 outline-none py-2 px-2 my-3 border-primary"
            type="text"
            {...register("ImageUrl", { required: true })}
            placeholder="Food picture URL"
          />
          {errors.ImageUrl && (
            <span className="text-danger">Please provide the image URL</span>
          )}

          <input className="bg-primary text-white py-2 my-3" type="submit" />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} className="modal-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
