import './contactList.css'
import userImage from '../img/user.jpg'
const ContactLsit = ({contacts,onDelete}) => {

    return (
        <div className="contactList">
            {contacts.map((contact) => {
                return(
                    <div className="item" key={contact.id}>
                        <img src={userImage} alt="user"/>
                        <p>name : {contact.name}</p>
                        <p>email :{contact.email}</p>
                        <button onClick={() =>onDelete(contact.id)}>delete</button>
                    </div>
                )
            })}
        </div>
    );
}
 
export default ContactLsit;