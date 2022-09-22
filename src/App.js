import { useState } from 'react';
import './App.css'
import AddContact from './components/AddContact/AddContact';
import ContactLsit from './components/ContactList/ContactLsit';

const App = () => {
  
  const [contacts,setContacts] = useState([])
  // console.log(contacts);

  const addContactHandler = (contact) =>{
    setContacts([...contacts,
      {id:Math.floor(Math.random()*10000) , name : contact.name,email:contact.email}])
  }

  const removeContactHandler = (id) =>{
    const filteredContacts = contacts.filter((c) =>c.id !== id)
    setContacts(filteredContacts)
  }

  return (
    <div className="App">
      <h1>Contact App</h1>
      <section>
        <AddContact 
          addContactHandler = {addContactHandler}
        />
      </section>
      <section>
        <ContactLsit 
          onDelete={removeContactHandler}
          contacts = {contacts}
        />
      </section>
    </div>
  );
}
 
export default App;