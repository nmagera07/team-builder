import React from 'react';

const MemberDisplayList = (props) => {
    const memberList = [
        {
            name: 'John Smith',
            email: 'john.smith@gmail.com',
            role: 'Front-End Engineer'
        },
        {
            name: 'Samantha Smith',
            email: 'ssmith@gmail.com',
            role: 'Back-End Engineer'
        },
        {
            name: 'Jack Smith',
            email: 'jack.smith@gmail.com',
            role: 'UX Designer'
        }
    ]


    return ( 
        <div>
            {memberList.map(person => {
               return <div key={person.name}>
                   <p>Name: {person.name}</p>
                   <p>Email: {person.email}</p>
                   <p>Role: {person.role}</p>
                </div>
            })}
        </div>
     );
}
 
export default MemberDisplayList;