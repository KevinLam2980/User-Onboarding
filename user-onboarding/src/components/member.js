import React from 'react'
import Styled from 'styled-components'

const Div = Styled.div`
border: 2px solid blue;
margin: 1rem 2rem;
background-color: grey;
border-radius: 50px;
`

const teamMember = (props) => {
const {member} = props
    return(
        <Div>
            <h2>{member.name}</h2>
            <p>Work ID: {member.id}</p>
            <p>Email: {member.email}</p>
            <p>Password: I'm not telling you my password 😤</p>

        </Div>
    )
}

export default teamMember