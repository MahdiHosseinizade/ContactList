import http from "./httpServices";

export default function addNewContact(data){
    return http.post(`/contacts`,data)
}