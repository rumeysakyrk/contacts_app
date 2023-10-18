import List from "./List";
import Form from "./Form";
import React, { useEffect, useState } from 'react';

import "./styles.css";

function Contacts() {
    const [contacts, setContacts]=useState([
      {fullname:'rumeysa', phonenumber: '123123'},
      {fullname:'bella', phonenumber: '321321'},
      {fullname:'betüş', phonenumber: '456789'}
    ]);

    useEffect(()=>{
      console.log(contacts);
    }, [contacts]); 

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts= {contacts} />
      <Form addContacts={setContacts} contacts={contacts}  />
    </div>
  )
}

export default Contacts;
