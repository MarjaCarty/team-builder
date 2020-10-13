import React from "react";

export default function Form(props) {
  const { values, updateForm, submitForm } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateForm(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Enter email"
      />

      <label htmlFor="role">Role</label>
      <select name="role" id="role" value={values.role} onChange={handleChange}>
        <option value="">---Select Role---</option>
        <option value="Front End Dev">Front End Dev</option>
        <option value="Back End Dev">Back End Dev</option>
        <option value="Database Manager">Database Manager</option>
      </select>
      <button>Add Team Member</button>
    </form>
  );
}
