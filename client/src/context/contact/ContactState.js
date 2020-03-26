import react, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const intitalState = {
    contacts: [
      {
        id: 1,
        name: "Harry potter",
        email: "hpotter@gmail.com",
        phone: "11-1111-1111",
        type: personal
      },
      {
        id: 2,
        name: "Hermoine Granger",
        email: "hgranger@gmail.com",
        phone: "22-2222-2222",
        type: personal
      },
      {
        id: 3,
        name: "Ronald Weasly",
        email: "rweasly@gmail.com",
        phone: "33-3333-3333",
        type: professional
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, intitalState);

  //Add Contact

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
