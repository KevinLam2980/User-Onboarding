import React from 'react'

const teamMember = (props) => {
const {member} = props
    return(
        <div>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
        </div>
    )
}

export default teamMember