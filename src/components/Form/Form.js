import React from 'react'
import './Form.css'

import handleFormField from '../../utilities/handleForm'

const INITIAL_STATE = {
  name: "",
  email: ""
}

function Form() {
  const { handleSubmit, handleChange, values } = handleFormField(INITIAL_STATE)

  return (
    <div className="Form">
      <h1 className="Heading">Simple React Hooks Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={values.name}
          name="name"
          autoComplete="off"
          placeholder="Your name"
          className="Input"
        />
        <input
          onChange={handleChange}
          value={values.email}
          name="email"
          placeholder="Your email address"
          className="Input"
        />
        <div>
          <button className="Button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
