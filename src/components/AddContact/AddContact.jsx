import { useState } from "react";
import './addContact.css';

const AddContact = ({addContactHandler}) => {
    
    const [contact,setContact] = useState({
        name:"",
        email:""
    }) 

    const changeHandler = (e) =>{
        const value = e.target.value ;
        setContact({...contact,[e.target.name] : value})
    }

    const submitForm = (e) =>{
        if (!contact.name || !contact.email) {
            alert('The field that you entered is empty!')
            return;
        }
        e.preventDefault() 
        addContactHandler(contact)
        setContact({name:"" ,email :""})
    }
    
    return (
        <form onSubmit={submitForm}>
            <div className="formControl">
                <label>name</label>
                <input type="text" name="name" value={contact.name} onChange={changeHandler}/>
                <label>email</label>
                <input type="text" name="email" value={contact.email} onChange={changeHandler}/>
            </div>
            <button type="submit">Add contact</button>
        </form>
    );
}
 
export default AddContact;