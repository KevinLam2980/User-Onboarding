import React from 'react'
import Styled from 'styled-components'


const Error = Styled.div`
background-color: yellow;
color: red;
font-size: 1.5rem;
margin-bottom: 1rem;
`

const Div = Styled.div`
padding: 0 2rem;
button {
    padding: .5rem 1rem;
    border-radius: 50%;
}
input {
    margin: 1rem 0;
    text-align: center;
    padding: .25rem 1rem;
    border-radius: 15px
}
form{
    border: 3px solid blue;
    padding: 1%;
    border-radius: 50px;
}
`


const form = (props) => {
    const { submit, values, inputChange, checkboxChange, disabled, errors } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
    }

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
    }

    return(
        <Div>
            <Error>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </Error>
            <form onSubmit={onSubmit}> 
                <label>Name:<br></br> 
                    <input
                    type="text"
                    name='name'
                    placeholder="Enter name"
                    value={values.name}
                    onChange={onInputChange}
                    ></input>
                </label>
                <br></br>
                <label>Email:<br></br>
                    <input
                    type="email"
                    name='email'
                    placeholder="Enter email"
                    value={values.email}
                    onChange={onInputChange}
                    ></input>
                </label>
                 <br></br>
                <label>Password:<br></br>
                    <input
                    type="text"
                    name='password'
                    placeholder="Enter password"
                    value={values.password}
                    onChange={onInputChange}
                    ></input>
                </label>
                 <br></br>
                <label> Terms of service:&nbsp;
                    <input
                    type="checkbox"
                    name='terms'
                    checked={values.terms}
                    onChange={onCheckboxChange}
                    ></input>
                </label>
                <br></br>
                <button disabled={disabled}>Submit</button>
            </form>
        </Div>
    )
}

export default form