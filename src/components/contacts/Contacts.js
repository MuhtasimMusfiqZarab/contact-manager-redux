import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Muhtasim Musfiq Zarab",
        email: "musfiqzarab@iut-dhaka.edu",
        phone: "+8801685055749"
      },
      {
        id: 2,
        name: "Maimuna Haque Mou",
        email: "maimunahaquemou@magosmani.com",
        phone: "444-444-4444"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@gmail.com",
        phone: "333-333-333"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
