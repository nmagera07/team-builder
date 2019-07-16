import React, {useState, useEffect} from 'react';
import { Form, Button } from 'semantic-ui-react'

const MemberForm = (props) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        role: '',
        
    })
    const [member, newMember] = useState({
        name: '',
        email: '',
        role: ''
    })

    const submitMember = event => {
        event.preventDefault()
        if(props.memberToEdit)
            props.edit(formState)
        else
            props.addMember(formState)
        setFormState({
            name: '',
            email: '',
            role: '',

        })
    }

    useEffect(() => {
       if(props.memberToEdit) 
            setFormState(props.memberToEdit)
   }, [props.memberToEdit])

    const changeHandler = event => {
        setFormState({...formState, [event.target.name]: event.target.value })
    }

    const cancelEdit = () => {
    setFormState({
      name: '',
      email: '',
      role: ''
    })
    props.formReset()
  }
   

    console.log("member", props.memberToEdit)

    return ( 
        <div className="form-div">
            
            <Form onSubmit={submitMember} size="large">
                <Form.Field width="3">
                <label>
                    Name: 
                    <Form.Input 
                        type="text" 
                        name="name" 
                        placeholder="name"
                        value={formState.name}
                        onChange={changeHandler}
                        >
                    </Form.Input>
                </label>
                </Form.Field>
                <Form.Field width="3">
                <label>
                    Email: 
                    <Form.Input 
                        type="email" 
                        name="email" 
                        placeholder="email"
                        value={formState.email}
                        onChange={changeHandler}
                        >
                    </Form.Input>
                </label>
                </Form.Field>
                <Form.Field width="3">
                <label>
                    Role: 
                    <Form.Input 
                        type="text" 
                        name="role" 
                        placeholder="role"
                        value={formState.role}
                        onChange={changeHandler}
                        >
                    </Form.Input>
                </label>
                </Form.Field>
            {props.memberToEdit ? <Button >Edit a team member</Button> : <Button>Add a team member</Button>}
            <Button onClick={cancelEdit}>Cancel Editing</Button>
            </Form>
        </div>
     );
}
 
export default MemberForm;