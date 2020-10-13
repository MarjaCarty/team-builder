import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    if (!newMember.name.trim() || !newMember.email.trim() || !newMember.role) {
      return;
    }

    setTeamMembers([...teamMembers, newMember]);
    setFormValues(initialFormValues);
  };

  return (
    <div>
      <h2>Add A Team Member</h2>

      <Form
        values={formValues}
        updateForm={updateForm}
        submitForm={submitForm}
      />

      {teamMembers.map((member) => {
        return (
          <div key={member.name}>
            <h2>{member.name} Details</h2>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
