import React, {useState, useEffect} from 'react';
import './App.css';
import MemberForm from './components/Form'
import 'semantic-ui-css/semantic.min.css'
import { Card, Button} from 'semantic-ui-react'
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
      <div className="outer-div">{teamMember.map(member => {
        return <div>
           <div className="members">
           <Card className="members-map">
              <Card.Content>
           <Card.Header><p>{member.name}</p></Card.Header>
            <Card.Description>
              <p>Email: {member.email}</p>
              <p>Role: {member.role}</p>
            </Card.Description>
            </Card.Content>
            <Button onClick={() => setMemberToEdit(memberToEdit)}>Edit Member</Button>
            </Card>
            </div>
        </div>
      })}</div>
      
      <MemberForm addMember={addMember} memberToEdit={setMemberToEdit}/>
    </div>
  );
}

export default App;
