import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
function Contacts() {
    const [contacts, setContacts]=useState([
        {fullName:"Hamza",phone_number:"123"},
        {fullName:"Burak",phone_number:"123"},
        {fullName:"Ali",phone_number:"123"},
        {fullName:"Veli",phone_number:"123"}
    ]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts])
  return (
    <div>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts