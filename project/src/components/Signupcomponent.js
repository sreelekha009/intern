import { useState } from "react"
import React from 'react'
import Modelcomponent from "./Modelcomponent";

const Signupcomponent = () => {
    const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleSubmit = () => {
    // Submit the signup form data
  };
  return (
    <div>
      <div>
      <button onClick={handleOpenModal}>Sign up</button>
      <Modelcomponent isOpen={showModal} onClose={() => setShowModal(false)} formData={formData} />
    </div>
    </div>
  )
}

export default Signupcomponent
