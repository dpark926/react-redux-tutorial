import { UPDATE_USER } from '../actions/user-actions';

function userReducer( state = '', { type, payload } ) {
  switch ( type ) {
    case UPDATE_USER:
      return payload.user;
    default:
      return state;
  }
};

// function userReducer( state = '', { type, payload } ) {
//   switch ( type ) {
//     case 'updateUser':
//       return payload;
//     default:
//       return state;
//   }
// };

export default userReducer;