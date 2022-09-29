import { getAllContacts } from './services/getAllContacts';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import AddContact from './components/AddContact/AddContact';
import ContactDetail from './components/ContactDetail/ContactDetail';
import ContactLsit from './components/ContactList/ContactLsit';
import deleteContact from './services/deleteContact' ;
import addNewContact from './services/addNewContact' ;



const App = () => {
  
  // const [contacts,setContacts] = useState(JSON.parse(localStorage.getItem("contacts")))
  const [contacts,setContacts] = useState([])

  const addContactHandler = async(contact) =>{
    try {
      // addNewContact(contact)
      setContacts([...contacts,
        {id:new Date().getTime() , name : contact.name,email:contact.email}])
        const {data} = await addNewContact(contact);
        // setContacts(data)
      } catch (error) {}
  }

  const removeContactHandler = async(id) =>{
    try {
      const filteredContacts = contacts.filter((c) => c.id !== id)
      setContacts(filteredContacts);
      await deleteContact(id)
    } catch (error) {}
  }
  
  
  
  useEffect(() =>{
    // localStorage.setItem("contacts",JSON.stringify(contacts))
    const getContacts = async() =>{
      const {data} = await getAllContacts()
      setContacts(data)  
    }
    try {
      getContacts()
    } catch (error) {
      console.log(error);
    }
  },[])
  
  

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