import React, {useState, useEffect} from 'react';

const Form = (props) => {
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
    })

    return ( 
        <div>
            
            <form onSubmit={addMember}>
                <label>
                    Name: 
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="name"
                        value={formState.name}
                        onChange={changeHandler}
                        >
                    </input>
                </label>
                <label>
                    Email: 
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="email"
                        value={formState.email}
                        onChange={changeHandler}
                        >
                    </input>
                </label>
                <label>
                    Role: 
                    <input 
                        type="text" 
                        name="role" 
                        placeholder="role"
                        value={formState.role}
                        onChange={changeHandler}
                        >
                    </input>
                </label>
            <button >Add a team member</button>
            </form>
        </div>
     );
}
 
export default Form;