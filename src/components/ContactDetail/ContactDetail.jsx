import { Link } from 'react-router-dom';
import './contactDetail.css'


const ContactDetail = ({location}) => {

    const contact = location.state;

    return (
        <div className="contactDetail">
            <p>user name is :{contact.name} </p>
            <p>user email is :{contact.email} </p>
            <Link to='/'>Cantact List</Link>
        </div>
    );
}
 
export default ContactDetail;