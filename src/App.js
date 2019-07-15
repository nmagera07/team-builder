import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form'
import MemberDisplayList from './components/MemberDisplayList'

function App() {
  const [teamMember, addTeamMember] = useState([
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
  ])

  const [memberToEdit, setMemberToEdit] = useState('')

  const addMember = (member) => {
    const newMember = [...teamMember, member]
    addTeamMember(newMember)
    
  }

  


  console.log("team member", teamMember)
  console.log("edit", memberToEdit)
  return (
    <div className="App">
      <h1>Team Members</h1>
      {teamMember.map(member => {
         return <div>
            <p>Name: {member.name}</p>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
            <button onClick={() => memberToEdit}>Edit Member</button>
         </div>
         
      })}
      
      <Form addMember={addMember} />
    </div>
  );
}

export default App;
