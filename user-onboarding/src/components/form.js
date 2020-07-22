import React from 'react'

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
        <div>
            <div>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
            <form onSubmit={onSubmit}> 
                <label>Name: 
                    <input
                    type="text"
                    name='name'
                    placeholder="Enter name"
                    value={values.name}
                    onChange={onInputChange}
                    ></input>
                </label>
                <label> Email: 
                    <input
                    type="email"
                    name='email'
                    placeholder="Enter email"
                    value={values.email}
                    onChange={onInputChange}
                    ></input>
                </label>
                <label> Password: 
                    <input
                    type="text"
                    name='password'
                    placeholder="Enter password"
                    value={values.password}
                    onChange={onInputChange}
                    ></input>
                </label>
                <label> Terms of service: 
                    <input
                    type="checkbox"
                    name='terms'
                    checked={values.terms === true}
                    onChange={onCheckboxChange}
                    ></input>
                </label>

                <button disabled={disabled}>Submit</button>
            </form>
        </div>
    )
}

export default form