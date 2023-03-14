import React, { useState } from "react";
import { useForm } from "react-hook-form";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  const {
    register,
    formState: { errors },
  } = useForm();

  const handlecontactForm = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={handlecontactForm}>
        <div className="name">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            {...register("name", { required: true, minLength: 5 })}
            value={name}
            onChange={(e) => setName((prev) => e.target.value)}
          />
          {errors.name && (
            <p className="text-error">Please check the First Name</p>
          )}
        </div>
        <div className="e-mail">
          <label htmlFor="e-mail">E-mail:</label>

          <input
            type="email"
            id="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail((prev) => e.target.value)}
          />
        </div>
        <div className="message">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setmessage((prev) => e.target.value)}
          ></textarea>
        </div>
        <button
          className="contact-button"
          type="submit"
          value="submit"
          onClick={handlecontactForm}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
