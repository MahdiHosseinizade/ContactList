import './contactList.css'
import userImage from '../img/user.jpg'
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';


const ContactLsit = ({contacts,onDelete}) => {
    return (
        <section className='listWrapper'>
            <div className="contactList">
            <div className='listHeader'>
                <h2>Contacts</h2>
                <Link  to={'/add'}>
                    <button className='link'>Add contact</button>
                </Link>
            </div>
            {contacts.map((contact) => {
                return(
                    <Contact
                        id = {contact.id}
                        name = {contact.name}
                        email ={contact.email}
                        userImage = {userImage}
                        onDelete ={() =>onDelete(contact.id)}
                    />
                )
            })}
        </div>
        </section>
    );
}
 
export default ContactLsit;