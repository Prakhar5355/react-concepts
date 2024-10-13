// userReducer.js
const initialState = {
    name: "Prakhar",
    email: "prakhar@example.com",
  };
  
  // Define the reducer function
  const userReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_EMAIL':
        return { ...state, email: action.payload };
      case 'CHANGE_NAME':
        return { ...state, name: action.payload };
      default:
        return state;
    }
  };
  
  export { initialState, userReducer };
  