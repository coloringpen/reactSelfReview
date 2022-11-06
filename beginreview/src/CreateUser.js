import React from 'react';

function CreateUser({ username, email, onChange, onSubmit }) {
  return (
    <div>
      <input
        placeholder="username"
        name="username"
        value={username}
        onChange={onChange}
      />
      <input
        placeholder="email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default CreateUser;
