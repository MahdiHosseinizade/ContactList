import { useEffect, useState } from 'react';
import './App.css'
import AddContact from './components/AddContact/AddContact';
import ContactLsit from './components/ContactList/ContactLsit';

const App = () => {
  
  const [contacts,setContacts] = useState([])

  const addContactHandler = (contact) =>{
    setContacts([...contacts,
      {id:Math.floor(Math.random()*10000) , name : contact.name,email:contact.email}])
  }

  const removeContactHandler = (id) =>{
    const filteredContacts = contacts.filter((c) =>c.id !== id)
    setContacts(filteredContacts)
  }
  
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("cantacts"))
    if (savedContacts) {setContacts(savedContacts);}
  }, [])
  
  useEffect(() =>{
    localStorage.setItem("contacts",JSON.stringify(contacts))
  },[contacts])
  
  

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