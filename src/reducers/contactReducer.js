import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "../actions/types";

const initialState = {
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
      name: "Bimal Kumar Shaha",
      email: "henry@gmail.com",
      phone: "333-333-333"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
}
