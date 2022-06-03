import React from 'react';
import Card from "./Card"
import contacts from './contacts';
function createCard(contact)
{
  return (<Card
  name={contact.name}
  img={contact.img}
  num={contact.num}
  gmail={contact.gmail}
 />);
}
function App() {
  return (
    <div>
    <h1 className='head'>My contact</h1>
    {contacts.map(createCard)}
    
    </div>
  );
}

export default App;
