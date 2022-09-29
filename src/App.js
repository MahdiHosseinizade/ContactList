import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import AddContact from './components/AddContact/AddContact';
import ContactDetail from './components/ContactDetail/ContactDetail';
import ContactLsit from './components/ContactList/ContactLsit';

const App = () => {
  
  // const [contacts,setContacts] = useState(JSON.parse(localStorage.getItem("contacts")))
  const [contacts,setContacts] = useState([])

  const addContactHandler = (contact) =>{
    setContacts([...contacts,
      {id:Math.floor(Math.random()*10000) , name : contact.name,email:contact.email}])
  }

  const removeContactHandler = (id) =>{
    const filteredContacts = contacts.filter((c) =>c.id !== id)
    setContacts(filteredContacts)
  }
  
  
  
  useEffect(() =>{
    // localStorage.setItem("contacts",JSON.stringify(contacts))
    const getContacts = async() =>{
      const {data} = await axios.get('http://localhost:3001/contacts')
      setContacts(data)  
    }
    getContacts()
  },[contacts])
  
  

  return (
    <div className="App">
      <h1>Contact App</h1>
      <Switch>
        <Route 
          path="/add" 
          render={(props) => <AddContact addContactHandler = {addContactHandler} {...props}/>} 
        />
        <Route 
          path="/" 
          exact 
          render={(props) => <ContactLsit onDelete={removeContactHandler} contacts = {contacts} {...props}/> } 
        />
        <Route 
          path= "/contact/:id" 
          component={ContactDetail}
        />
      </Switch>
    </div>
  );
}
 
export default App;