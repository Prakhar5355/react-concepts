// userReducer.js
const initialState = {
    name: "Prakhar",
    email: "prakhar@example.com",
  };
  
  // Define the reducer function
  const UserReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_EMAIL':
        return { ...state, email: action.payload };
      case 'CHANGE_NAME':
        return { ...state, name: action.payload };
      default:
        return state;
    }
  };
  
  export { initialState, UserReducer };
  