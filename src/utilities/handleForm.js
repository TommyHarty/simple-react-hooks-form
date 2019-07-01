import { useState } from 'react'

function HandleForm(initialState) {
  const [values, setValues] = useState(initialState)

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log( values.name, values.email )
  }

  return { handleSubmit, handleChange, values }
}

export default HandleForm
