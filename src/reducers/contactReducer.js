import { GET_CONTACTS } from "../actions/types";

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
    default:
      return state;
  }
}
