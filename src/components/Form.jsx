import React, {useState, useEffect} from 'react';
import { Form, Button } from 'semantic-ui-react'

const MemberForm = (props) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        role: ''
    })
    const [member, newMember] = useState({
        name: '',
        email: '',
        role: ''
    })

    const addMember = event => {
        event.preventDefault()
        props.addMember(formState)
        setFormState({
            name: '',
            email: '',
            role: ''
        })
        console.log("formState: ", formState)
    }

    const changeHandler = event => {
        setFormState({...formState, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        props.memberToEdit(formState)
    }, [])

    console.log("member", props.memberToEdit)

    return ( 
        <div className="form-div">
            
            <Form onSubmit={addMember} size="large">
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
            <Button >Add a team member</Button>
            </Form>
        </div>
     );
}
 
export default MemberForm;