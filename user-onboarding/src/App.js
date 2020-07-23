import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form'
import schema from './validation/schema'
import Member from './components/member'

import axios from 'axios'
import * as yup from 'yup'
import formSchema from './validation/schema';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: ''
}

const initalFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: ''
}

const initialTeam = []
const initialDisabled = true

function App() {
  const [team, setTeam] = useState(initialTeam)
  const [form, setForm] = useState(initialFormValues)

  const [errors, setErrors] = useState(initalFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

const inputChange = (name, value) => {
  yup
  .reach(formSchema, name)
  .validate(value)
  .then(valid => {
    setErrors({
      ...initalFormErrors,
      [name]: ""
    })
  })
  .catch(err => {
    setErrors({
      ...errors,
      [name]: err.errors[0]
    })
  })
  setForm({
    ...form,
    [name]: value
  })
}

const checkboxChange = (name, isChecked) => {
  setForm({
    ...form, [name]: isChecked
  })
}

  const postNewMember = (newMember) => {
    axios.post('https://reqres.in/api/users', newMember)
    .then(res => {
      console.log(res)
      setTeam([res.data, ...team])
      setForm(initialFormValues)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const submit = () => {
    const newMember = {
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password.trim(),
      terms: form.terms
    }
    postNewMember(newMember)
  }

  useEffect(() => {
    schema.isValid(form).then(valid => {
      setDisabled(!valid)
    })
  }, [form])

  return (
    <div className="App">
      <h1>Register new team member</h1>
      <Form submit={submit} values={form} inputChange={inputChange} checkboxChange={checkboxChange} errors={errors} disabled={disabled}/>

      {
        team.map(member => {
          return <Member member={member} key={member.id}/>
        }) 
      }
    </div>
  );
}

export default App;
