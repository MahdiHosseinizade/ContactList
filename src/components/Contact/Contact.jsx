import { Link } from "react-router-dom";


const Contact = ({id,name ,email,onDelete,userImage}) => {
    return (  
        <div  className="item" key={id}>
            <img src={userImage} alt="user"/>
            <Link to={{pathname:`contact/${id}`,state:{contact:id,name,email}}}>
                <div>
                    <p>name : {name}</p>
                    <p>email :{email}</p>
                </div>
            </Link>
            <button onClick={onDelete}>delete</button>
        </div>
    );
}
 
export default Contact;